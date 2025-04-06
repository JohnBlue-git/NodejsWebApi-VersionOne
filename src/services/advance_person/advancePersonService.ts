import Person from '../../models/person/person'; // Assuming you have a proper Person class defined
import IPersonService from '../interfacePersonService'; // Assuming you have an interface `IPersonService`

interface PersonData {
  name: string;
  age: number;
}

class AdvancePersonService extends IPersonService {
  private num_instances: number;
  private persons: Map<number, Person>;

  constructor() {
    super();
    this.num_instances = 0;
    this.persons = new Map();
  }

  // Get all persons
  async getAllPersons(): Promise<Person[]> {
    return Array.from(this.persons.values());
  }

  // Get a person by ID
  async getPersonById(id: number): Promise<Person | undefined> {
    if (!this.persons.has(id)) {
      return undefined;
    }
    return this.persons.get(id);
  }

  // Create a new person
  async createPerson(newPerson: Person): Promise<void> {
    this.persons.set(this.num_instances++, newPerson);
  }

  // Delete a person by ID
  async deletePersonById(id: number): Promise<boolean> {
    if (!this.persons.has(id)) {
      return false;
    }
    this.persons.delete(id);
    return true;
  }

  // Delete all persons
  async deletePersons(): Promise<void> {
    this.persons.clear();
  }
}

export default AdvancePersonService;
