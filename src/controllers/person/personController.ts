import { Request, Response } from 'express';
import AbstractController from '../abstractController';
import PersonSerializer from '../../serializers/person/personSerializer';
import IPersonService from '../../services/interfacePersonService';

class PersonController extends AbstractController {
  private personService: IPersonService;

  constructor(service: IPersonService) {
    super(); // Call the constructor of AbstractController
    this.personService = service; // Store the provided service class
  }

  // Get all persons
  async getAllPersons(req: Request, res: Response): Promise<void> {
    try {
      const persons = await this.personService.getAllPersons();
      const serializedPersons = PersonSerializer.serializeMultiple(persons);
      res.status(200).json(serializedPersons);
    } catch (err) {
      this.handleError(res, 'Error fetching persons; ' + err, 500);
    }
  }

  // Get a person by id
  async getPersonById(req: Request, res: Response, id: number): Promise<void> {
    try {
      const person = await this.personService.getPersonById(id);
      if (person === undefined) {
        res.status(404).json({ error: 'Person with id not found' });
        return;
      }
      const serializedPerson = PersonSerializer.serialize(person);
      res.status(200).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error getting person; ' + err, 500);
    }
  }

  // Create a new person
  async createPerson(req: Request, res: Response): Promise<void> {
    try {
      const newPerson = PersonSerializer.deserialize(req.body);
      await this.personService.createPerson(newPerson);
      const serializedPerson = PersonSerializer.serialize(newPerson);
      res.status(201).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error creating person; ' + err, 500);
    }
  }

  // Update person by id
  async patchPersonById(req: Request, res: Response, id: number): Promise<void> {
    try {
      const person = await this.personService.getPersonById(id);
      if (person === undefined) {
        res.status(404).json({ error: 'Person with id not found' });
        return;
      }
      if (req.body.name) {
        person.setName(req.body.name);
      }
      if (req.body.age) {
        person.setAge(req.body.age);
      }
      const serializedPerson = PersonSerializer.serialize(person);
      res.status(200).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error updating person; ' + err, 500);
    }
  }

  // Delete person by id
  async deletePersonById(req: Request, res: Response, id: number): Promise<void> {
    try {
      const check = await this.personService.deletePersonById(id);
      if (check === true) {
        res.status(204).send();
        return;
      }
      res.status(404).json({ error: 'Person with id not found' });
    } catch (err) {
      this.handleError(res, 'Error deleting person; ' + err, 500);
    }
  }

  // Delete all persons
  async deletePersons(req: Request, res: Response): Promise<void> {
    try {
      await this.personService.deletePersons();
      res.status(204).send();
    } catch (err) {
      this.handleError(res, 'Error deleting persons; ' + err, 500);
    }
  }
}

export default PersonController;
