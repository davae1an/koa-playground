"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _user_controller = require("./user_controller");

var _models = require("../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const user_router = new _koaRouter2.default({ prefix: "/user" });

user_router.get("/", async function (ctx) {
  ctx.response.body = await (0, _user_controller.getAllUsers)(_models2.default);
});

user_router.get("/:id", async function (ctx) {
  ctx.response.body = await (0, _user_controller.getUserById)(_models2.default, ctx.params.id);
});

user_router.get("/username/:uname", async function (ctx) {
  ctx.response.body = await (0, _user_controller.getUser)(_models2.default, ctx.params.uname);
});

user_router.post("/create", async function (ctx) {
  await (0, _user_controller.createUser)(_models2.default, ctx.request.body);
});

exports.default = user_router;