type ErrorTypes =
  | 'CONFLICT'
  | 'UNPROCESSABLE_ENTITY'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND';

export interface Error {
  type: ErrorTypes;
  message: string;
}

export function isAppError(error: object): error is Error {
  return (error as Error).type !== undefined;
}

export function typeToStatusCode(type: ErrorTypes) {
  if (type === 'UNAUTHORIZED') return 401;
  if (type === 'NOT_FOUND') return 404;
  if (type === 'CONFLICT') return 409;
  if (type === 'UNPROCESSABLE_ENTITY') return 422;
}
