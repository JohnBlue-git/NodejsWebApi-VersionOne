import express, { Request, Response } from 'express';  // Import express and types for Request and Response
import routes from './routes';  // Import the routes (with default export assumed)

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());  // Express has built-in body-parser as of v4.16+

// Use the routes defined in routes.ts
app.use('/api', routes);  // All routes will now be prefixed with '/api'

// Basic route to ensure the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Web API!');
});

export default app;  // Export the app for server.ts to use
