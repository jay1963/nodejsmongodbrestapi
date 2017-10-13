import { Router } from 'express';
import validate from 'express-validation';
import { authJwt } from '../../services/auth.services';
import * as postController from './post.controller';
import postValidation from './post.validation';

const routes = new Router();

routes.post(
  '/',
  authJwt,
  validate(postValidation.createPorst),
  postController.createPost,
);

routes.get('/:id', authJwt, postController.getPostById);

routes.get('/', authJwt, postController.getPostList);

routes.patch(
  '/:id',
  authJwt,
  validate(postValidation.updatePost),
  postController.updatePost,
);

routes.delete('/:id', authJwt, postController.deletePost);

// Favorites
routes.post('/:id/favorite', authJwt, postController.favoritePost);

export default routes;
