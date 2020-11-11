import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const AuthRouter = Router();

AuthRouter.route('/')
    .post(AuthController.store);

export default AuthRouter;
