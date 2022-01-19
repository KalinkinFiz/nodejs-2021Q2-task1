import { Request, Response, NextFunction } from 'express';

const catchErrors = (fn: Function) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Function | void> => {
  try {
    return fn(req, res, next);
  } catch (error) {
    return next(error);
  }
};

export default catchErrors;
