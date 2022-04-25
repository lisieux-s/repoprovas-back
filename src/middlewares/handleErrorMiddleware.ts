import { NextFunction, Request, Response } from 'express';

import { Error, isAppError, typeToStatusCode } from '../utils/errorUtils.js';

export function handleErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (isAppError(error))
    return res.status(typeToStatusCode(error.type)).send(error.message);
  return res.sendStatus(500);
}
