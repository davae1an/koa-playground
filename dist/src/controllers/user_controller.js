"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;

var _user_model = require("../models/user_model");

var _user_model2 = _interopRequireDefault(_user_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createUser(data) {
  const user = new _user_model2.default(data);
  try {
    await user.save();
    return user.username;
  } catch (err) {
    ctx.throw(422, err.message);
  }
}