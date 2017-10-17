import Koa from "koa";
import user_router from "./modules/user/user_routes";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import mongoose from "mongoose";
import bluebird from "bluebird";
mongoose.Promise = bluebird;

const app = new Koa();

mongoose.connect("mongodb://localhost:/koa-playground", {
  useMongoClient: true
});

app.use(logger());
app.use(bodyParser());
app.use(user_router.routes()).use(user_router.allowedMethods());

app.listen(3000);
