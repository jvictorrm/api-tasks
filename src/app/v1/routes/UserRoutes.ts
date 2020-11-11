import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRouter = Router();

UserRouter.route('/')
    .post(UserController.store);

export default UserRouter;
