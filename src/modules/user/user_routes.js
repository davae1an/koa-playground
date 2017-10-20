import Router from 'koa-router';
import {
  createUser,
  getAllUsers,
  getUser,
  getUserById,
} from './user_controller';
import models from '../../models';

const userRouter = new Router({ prefix: '/user' });

userRouter.get('/', async (ctx) => {
  await getAllUsers(models, ctx);
});

userRouter.get('/:id', async (ctx) => {
  await getUserById(models, ctx);
});

userRouter.get('/username/:uname', async (ctx) => {
  await getUser(models, ctx);
});

userRouter.post('/create', async (ctx) => {
  await createUser(models, ctx);
});

export default userRouter;
