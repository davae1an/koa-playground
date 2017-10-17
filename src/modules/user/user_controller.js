export async function createUser(models, data) {
  const user = new models.UserModel(data);
  try {
    return await user.save();
  } catch (err) {
    ctx.throw(422, err.message);
  }
}

export async function getAllUsers(models) {
  return await models.UserModel.find({});
}

export async function getUser(models, username) {
  return await models.UserModel.find({ username });
  // the username above is same as {username: username} same name in schema ES6 syntax practice
}

export async function getUserById(models, userId) {
  return await models.UserModel.findById(userId);
}
