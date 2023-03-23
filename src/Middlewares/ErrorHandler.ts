import { NextFunction, Request, Response } from 'express';
import CustomError from '../Utils/CustomError';

export default class ErrorHandler {
  static handle(
    error: CustomError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const errorStatus = error.status;
    if (errorStatus) res.status(errorStatus).json({ message: error.message });
    res.status(500).json({ message: error.message });
    next();
  }
}
