import { Router } from 'express';
import validate from 'express-validation';
import { authLocal } from '../../services/auth.services';
import * as userController from './user.contronllers';
import userValidatioin from './user.validations';

const routes = new Router();

routes.post('/signup', validate(userValidatioin.signup), userController.singUp);
routes.post('/login', authLocal, userController.login);

export default routes;
