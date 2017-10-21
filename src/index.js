import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
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
// unsecured
app.use(authRouter.routes()).use(authRouter.allowedMethods());
// secured jwt
app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(config.port);
