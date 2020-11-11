import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import tokenConfig from '../../../config/token';

class SessionController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Usuário/Senha estão inválidos' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Usuário/Senha estão inválidos' });
        }

        delete user.password;

        const token = jwt.sign({ id: user.id }, tokenConfig.tokenSecret,
            { expiresIn: tokenConfig.tokenExpiresIn });

        const response = {
            user, token,
        };

        return res.status(201).json(response);
    }

    async update(req: Request, res: Response) { }

    async destroy(req: Request, res: Response) { }
}

export default new SessionController();
