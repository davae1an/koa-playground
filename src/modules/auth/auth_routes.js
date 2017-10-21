import Router from 'koa-router';
// import { authUser } from './auth_controller';

const authRouter = new Router({ prefix: '/auth' });


authRouter.post('/', async (ctx) => {
  // await authUser(ctx);
  ctx.body = { route: 'auth unsecured' };
});

export default authRouter;
