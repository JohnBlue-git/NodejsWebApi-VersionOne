import express, { Request, Response } from 'express';
import PersonController from '../../controllers/person/personController';
import AdvancePersonService from '../../services/advance_person/advancePersonService';
import RoutesUtils from '../routes_utils';

const router = express.Router();

// Create an instance of AdvancePersonService and PersonController
const advancePersonService = new AdvancePersonService();
const advancePersonController = new PersonController(advancePersonService);

// Define the routes
// GET collection
router.get('/', (req: Request, res: Response) => advancePersonController.getAllPersons(req, res));

// GET by id
router.get('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  advancePersonController.getPersonById(req, res, id);
});

// POST
router.post('/', (req: Request, res: Response) => advancePersonController.createPerson(req, res));

// PATCH by id
router.patch('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  advancePersonController.patchPersonById(req, res, id);
});

// DELETE by id
router.delete('/:id', (req: Request, res: Response) => {
  const id = RoutesUtils.getValidId(req, res);
  if (typeof id === 'undefined') {
    return;
  }
  advancePersonController.deletePersonById(req, res, id);
});

// DELETE collection
router.delete('/', (req: Request, res: Response) => advancePersonController.deletePersons(req, res));

export default router;
