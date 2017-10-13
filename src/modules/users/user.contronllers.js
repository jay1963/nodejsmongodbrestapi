import HTTPStatus from 'http-status';
import User from './user.model';

export async function singUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
}

export function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.user);
  return next();
}
