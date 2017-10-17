"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _user_routes = require("./modules/user/user_routes");

var _user_routes2 = _interopRequireDefault(_user_routes);

var _koaBodyparser = require("koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require("koa-logger");

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

const app = new _koa2.default();

_mongoose2.default.connect("mongodb://localhost:/koa-playground", {
  useMongoClient: true
});

app.use((0, _koaLogger2.default)());
app.use((0, _koaBodyparser2.default)());
app.use(_user_routes2.default.routes()).use(_user_routes2.default.allowedMethods());

app.listen(3000);