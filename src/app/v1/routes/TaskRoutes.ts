import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const TaskRouter = Router();

TaskRouter.route('/')
    .get(TaskController.index)
    .post(TaskController.store);

TaskRouter.route('/:id')
    .get(TaskController.show)
    .put(TaskController.update)
    .delete(TaskController.destroy);

export default TaskRouter;
