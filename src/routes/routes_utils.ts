import { Request, Response } from 'express';

class RoutesUtils {
  
  // Method to handle the request and validate the ID
  public static getValidId(req: Request, res: Response): number | undefined {
    // Destructure the 'idStr' from the route parameters
    const { id } = req.params;

    // Convert the 'idStr' into an integer, 10 means decimal
    const idNum = parseInt(id, 10);

    // Check if the parsed 'id' is a valid number
    if (isNaN(idNum)) {
      // Return a 400 response with an error message if the ID is invalid
      res.status(400).json({ error: 'Invalid ID format' });
      return undefined;
    }

    // If ID is valid
    return idNum;
  }
}

export default RoutesUtils;
