import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function preSave(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      resolve(salt);
    });
  })
    .then((salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          throw new Error(err);
        }

        user.password = hash;

        next(null);
      });
    })
    .catch(err => next(err));
});


const UserModel = mongoose.model('users', UserSchema);


export default UserModel;
