export async function createUser(models, ctx) {
  const user = new models.UserModel(ctx.request.body);
  try {
    await user.save();
  } catch (err) {
    ctx.throw(422, err.message);
  }

  const response = user.toJSON();
  delete response.password;
  ctx.body = {
    user: response,
    success: true,

  };
}


export async function getAllUsers(models, ctx) {
  const users = await models.UserModel.find({});
  ctx.body = { users };
}

export async function getUser(models, ctx) {
  const user = await models.UserModel.find({ username: ctx.params.uname });
  ctx.body = { user };
}

export async function getUserById(models, ctx) {
  try {
    const user = models.UserModel.findById(ctx.params.id);
    if (!user) {
      ctx.throw(404);
    }

    ctx.body = {
      user,
    };
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404);
    }

    ctx.throw(500);
  }

  // if (next) { return next(); }
}

export async function updateUser(ctx) {
  const user = ctx.body.user;

  Object.assign(user, ctx.request.body.user);

  await user.save();

  ctx.body = {
    user,
  };
}

export async function deleteUser(ctx) {
  const user = ctx.body.user;

  await user.remove();

  ctx.status = 200;
  ctx.body = {
    success: true,
  };
}
