import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", function(next) {
  // do stuff
  console.log("D0ing Something before save");
  next();
});

let UserModel = mongoose.model("users", UserSchema);

export default UserModel;
