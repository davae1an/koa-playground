export async function authUser(ctx) {
  if (ctx.isAuthenticated()) {
    ctx.body = {
      token: ctx.state.user.generateToken(),
    };
  }
}


// export async function authUser(models, ctx) {
//   try {
//     const user = await models.UserModel.findOne({ username: ctx.request.body.username });


//     if (!user) {
//       ctx.body = {
//         user,
//         server: 'Incorrect username.',
//       };
//     } else {
//       const validate = await user.validatePassword(ctx.request.body.password);
//       if (validate) {
//         const response = user.toJSON();
//         delete response.password;
//         ctx.body = {
//           user: response,
//           token: user.generateToken(),
//           server: 'generated',
//         };
//       } else {
//         ctx.body = {
//           user,
//           server: 'Incorrect password/username.',
//         };
//       }
//     }
//   } catch (err) {
//     if (err === 404 || err.name === 'CastError') {
//       ctx.throw(404);
//     } else {
//       ctx.throw(500);
//     }
//   }
// }
