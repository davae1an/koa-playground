import jwt from 'koa-jwt';
import config from '../../configs/config';

const jwToken = jwt({ secret: config.token });

export default jwToken;

