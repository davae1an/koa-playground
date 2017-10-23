import Router from 'koa-router';
import passport from 'koa-passport';
import { authUser } from './auth_controller';
import models from '../../models';

const authRouter = new Router({ prefix: '/auth' });
const localAuth = passport.authenticate('local', { session: false });

authRouter.post('/local', localAuth, async (ctx) => {
  await authUser(models, ctx);
});

export default authRouter;
