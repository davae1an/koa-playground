import Router from 'koa-router';
import { authUser } from './auth_controller';
import models from '../../models';

const authRouter = new Router({ prefix: '/auth' });


authRouter.post('/', async (ctx) => {
  await authUser(models, ctx);
});

export default authRouter;
