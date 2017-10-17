"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.getUserById = getUserById;
async function createUser(models, data) {
  const user = new models.UserModel(data);
  try {
    return await user.save();
  } catch (err) {
    ctx.throw(422, err.message);
  }
}

async function getAllUsers(models) {
  return await models.UserModel.find({});
}

async function getUser(models, username) {
  return await models.UserModel.find({ username });
  // the username above is same as {username: username} same name in schema ES6 syntax practice
}

async function getUserById(models, userId) {
  return await models.UserModel.findById(userId);
}