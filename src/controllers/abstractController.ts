import { Request, Response } from 'express';

abstract class AbstractController {
  constructor() {
    if (new.target === AbstractController) {
      throw new TypeError('Cannot construct AbstractController instances directly');
    }
  }

  // Optional: Common methods that could be shared across all controllers
  handleError(res: Response, message: string, statusCode: number = 500): void {
    res.status(statusCode).json({ message });
  }

  // Abstract methods that must be implemented by subclasses
  abstract getAllPersons(req: Request, res: Response): Promise<void>;
  abstract getPersonById(req: Request, res: Response, id: number): Promise<void>;
  abstract createPerson(req: Request, res: Response): Promise<void>;
  abstract patchPersonById(req: Request, res: Response, id: number): Promise<void>;
  abstract deletePersonById(req: Request, res: Response, id: number): Promise<void>;
  abstract deletePersons(req: Request, res: Response): Promise<void>;
}

export default AbstractController;
