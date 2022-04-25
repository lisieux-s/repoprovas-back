import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import * as authService from '../services/authService.js';

export async function validateAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers['authorization'] as string;
  const token = auth?.replace('Bearer ', '');

  if (!auth || !token) throw { type: 'UNAUTHORIZED' };

  const { id } = jwt.verify(token, process.env.JWT_SECRET) as { id: number };
    res.locals.user = await authService.findById(id);
}
