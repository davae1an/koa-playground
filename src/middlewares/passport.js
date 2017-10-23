import passport from 'koa-passport';
import { Strategy } from 'passport-local';
import UserModel from '../models/user_model';

// This files was imported in the main index.js just before passport.initialize

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id, '-password');
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });

const LocalStrategy = new Strategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return done(null, false);
    }
    const validate = await user.validatePassword(password);
    if (validate) {
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err);
  }
});

passport.use('local', LocalStrategy);


// Future Strategies

// const FacebookStrategy = require('passport-facebook').Strategy
// passport.use(new FacebookStrategy({
//     clientID: 'your-client-id',
//     clientSecret: 'your-secret',
//     callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/facebook/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     // retrieve user
//     User.findOne({ facebook_id: profile.id }, done);
//   }
// ))

// const TwitterStrategy = require('passport-twitter').Strategy
// passport.use(new TwitterStrategy({
//     consumerKey: 'your-consumer-key',
//     consumerSecret: 'your-secret',
//     callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/twitter/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     // retrieve user
//     User.findOne({ twitter_id: profile.id }, done);
//   }
// ))

// const GoogleStrategy = require('passport-google-auth').Strategy
// passport.use(new GoogleStrategy({
//     clientId: 'your-client-id',
//     clientSecret: 'your-secret',
//     callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/google/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     // retrieve user
//     User.findOne({ google_id: profile.id }, done);
//   }
// ))
