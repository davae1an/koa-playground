import Router from 'koa-router';
import compose from 'koa-compose';
import {
  createUser,
  getAllUsers,
  getUser,
  getUserById,
} from './user_controller';
import models from '../../models';
import { jwToken, JWTErrorHandler } from '../../middlewares/jwt';

// Composes middleware and stops the Object only error in router function
const jwtware = compose([JWTErrorHandler, jwToken]);

// userRouter.use(JWTErrorHandler).use(jwToken); <-- use to make all routes secure

const userRouter = new Router({ prefix: '/user' });


// Secured Routes
userRouter.get('/', jwtware, async (ctx) => {
  await getAllUsers(models, ctx);
});

userRouter.get('/:id', jwtware, async (ctx) => {
  await getUserById(models, ctx);
});

userRouter.get('/username/:uname', jwtware, async (ctx) => {
  await getUser(models, ctx);
});


// Unsecured Routes
userRouter.post('/create', async (ctx) => {
  await createUser(models, ctx);
});

export default userRouter;
