import Person from '../../models/person/person';
import IPersonService from '../interfacePersonService';

interface PersonData {
  name: string;
  age: number;
}

class PersonService extends IPersonService {
  private persons: Person[];

  constructor() {
    super();
    this.persons = [];
  }

  // Get all persons
  async getAllPersons(): Promise<Person[]> {
    return this.persons;
  }

  // Get a person by ID
  async getPersonById(id: number): Promise<Person | undefined> {
    if (id + 1 > this.persons.length) {
      return undefined;
    }
    return this.persons[id];
  }

  // Create a new person
  async createPerson(newPerson: Person): Promise<void> {
    this.persons.push(newPerson);
  }

  // Delete a person by ID
  async deletePersonById(id: number): Promise<boolean> {
    if (id + 1 > this.persons.length) {
      return false;
    }
    this.persons.splice(id, 1);
    return true;
  }

  // Delete all persons
  async deletePersons(): Promise<void> {
    this.persons = [];
  }
}

export default PersonService;
