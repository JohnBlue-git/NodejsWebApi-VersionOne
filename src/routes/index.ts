import express, { Request, Response } from 'express';
import personRoutes from './person/personRoutes';
import advancePersonRoutes from './advance_person/advancePersonRoutes';

const router = express.Router();

// Use the person routes for any '/api/person' requests
router.use('/person', personRoutes);

// Use the advancePerson routes for any '/api/advance_person' requests
router.use('/advance_person', advancePersonRoutes);

// You can add other routes here for different parts of the API
// For example, you can add a basic home route
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Web API!');
});

// Export the main router
export default router;
