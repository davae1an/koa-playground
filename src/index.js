import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import jwToken from './middlewares/jwt';
import userRouter from './modules/user/user_routes';
import config from '../configs/config';

mongoose.Promise = bluebird;

const app = new Koa();

mongoose.connect(config.database, {
  useMongoClient: true,
});

app.use(jwToken);
app.use(logger());
app.use(bodyParser());

app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(config.port);
