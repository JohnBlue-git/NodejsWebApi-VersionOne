import express, { Request, Response } from 'express';
import PersonController from '../../controllers/person/personController';
import PersonService from '../../services/person/personService';
import RoutesUtils from '../routes_utils';

const router = express.Router();

// Create an instance of PersonService and PersonController
const personService = new PersonService();
const personController = new PersonController(personService);

// Define the routes
// GET collection
router.get('/', (req: Request, res: Response) => personController.getAllPersons(req, res));

// GET by id
router.get('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  personController.getPersonById(req, res, id);
});

// POST
router.post('/', (req: Request, res: Response) => personController.createPerson(req, res));

// PATCH by id
router.patch('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  personController.patchPersonById(req, res, id);
});

// DELETE by id
router.delete('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  personController.deletePersonById(req, res, id);
});

// DELETE collection
router.delete('/', (req: Request, res: Response) => personController.deletePersons(req, res));

export default router;
