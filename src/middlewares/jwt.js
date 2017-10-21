import jwt from 'koa-jwt';
import config from '../../configs/config';

const jwToken = jwt({ secret: config.token });

function JWTErrorHandler(ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        error: 'Not authorized',
      };
    } else {
      throw err;
    }
  });
}

export { jwToken, JWTErrorHandler };

