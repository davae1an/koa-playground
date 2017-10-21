
export async function authUser(models, ctx) {
  try {
    const user = await models.UserModel.findOne({ username: ctx.request.body.username });


    if (!user) {
      ctx.body = {
        user,
        server: 'Incorrect username.',
      };
    } else {
      const response = user.toJSON();
      delete response.password;
      ctx.body = {
        user: response,
        token: user.generateToken({ username: user.username }),
        server: 'generated',
      };
    }
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404);
    } else {
      ctx.throw(500);
    }
  }

  // if (next) { return next(); }
}
