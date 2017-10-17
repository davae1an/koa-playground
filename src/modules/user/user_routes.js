import Router from "koa-router";
import {
  createUser,
  getAllUsers,
  getUser,
  getUserById
} from "./user_controller";
import models from "../../models";

const user_router = new Router({ prefix: "/user" });

user_router.get("/", async function(ctx) {
  ctx.response.body = await getAllUsers(models);
});

user_router.get("/:id", async function(ctx) {
  ctx.response.body = await getUserById(models, ctx.params.id);
});

user_router.get("/username/:uname", async function(ctx) {
  ctx.response.body = await getUser(models, ctx.params.uname);
});

user_router.post("/create", async function(ctx) {
  await createUser(models, ctx.request.body);
});

export default user_router;
