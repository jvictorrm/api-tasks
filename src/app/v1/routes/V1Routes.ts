import { Router } from 'express';
import TaskRoutes from './TaskRoutes';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';
import authMiddleware from '../middlewares/auth';

const V1Router = Router();

V1Router.use('/auths', AuthRoutes);
V1Router.use('/users', UserRoutes);
V1Router.use('/tasks', authMiddleware, TaskRoutes);

export default V1Router;
