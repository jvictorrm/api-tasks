import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import tokenConfig from '../../../config/token';

interface TokenPayload {
    id: number,
    iat: number,
    exp: number
}

export default function sessionMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Você precisa se autenticar para acessar o recurso' });
    }

    const [_, token] = authorization.split(' ');

    try {
        const data = jwt.verify(token, tokenConfig.tokenSecret);
        const { id, exp } = data as TokenPayload;

        if (new Date(exp * 1000) < new Date()) {
            return res.status(401).json({ error: 'Seu Token expirou' });
        }

        req.userId = id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Você precisa se autenticar para acessar o recurso' });
    }
}
