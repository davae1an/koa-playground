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


// var jwtreference = {
//  "sub": "1234567890", <-- user.id
//  "name": "John Doe",
//  "admin": true,
//  "jti": "128855d7-e397-4de2-92cd-707447a1576c",
//  "iat": 1508649726,  <--- time created
//  "exp": 1508653326   <--- when it expires
// }
