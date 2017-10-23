import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import passport from 'koa-passport';
import userRouter from './modules/user/user_routes';
import authRouter from './modules/auth/auth_routes';
import config from '../configs/config';

mongoose.Promise = bluebird;

const app = new Koa();

mongoose.connect(config.database, {
  useMongoClient: true,
});


app.use(logger());
app.use(bodyParser());

// initialize passport middleware strategies
require('./middlewares/passport');

app.use(passport.initialize());
// app.use(passport.session());
app.use(authRouter.routes()).use(authRouter.allowedMethods());
app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(config.port);
