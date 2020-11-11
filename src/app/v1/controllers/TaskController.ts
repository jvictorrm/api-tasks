import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import omitEmpty from 'omit-empty';
import Task from '../models/Task';
import User from '../models/User';

class TaskController {
    async index(req: Request, res: Response) {
        const taskRepository = getRepository(Task);
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: req.userId } });
        const tasks = await taskRepository.find({ where: { user } });
        return res.send(tasks);
    }

    async show(req: Request, res: Response) {
        const taskRepository = getRepository(Task);
        const task = await taskRepository.findOne({ where: { id: req.params.id } });
        return res.send(task);
    }

    async store(req: Request, res: Response) {
        const taskRepository = getRepository(Task);
        const { title, description } = req.body;

        if (!title) {
            return res.status(409).json({ error: 'Por favor, informe ao menos o título da tarefa' });
        }

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: req.userId } });

        const task = taskRepository.create({ title, description, user });
        await taskRepository.save(task);

        delete task.user;

        return res.status(201).json(task);
    }

    async update(req: Request, res: Response) {
        const taskRepository = getRepository(Task);
        const { title, description, is_done } = req.body;
        await taskRepository.update(Number(req.params.id),
            omitEmpty({ title, description, isDone: is_done }));

        const task = await taskRepository.findOne(Number(req.params.id));

        res.send(task);
    }

    async destroy(req: Request, res: Response) {
        const taskRepository = getRepository(Task);
        await taskRepository.delete(Number(req.params.id));
        return res.send();
    }
}

export default new TaskController();
