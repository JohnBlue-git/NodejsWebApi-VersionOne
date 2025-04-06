import Person from '../models/person/person';

abstract class IPersonService {
  // Constructor to prevent instantiation of this class
  constructor() {
    if (new.target === IPersonService) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  // Methods that must be implemented by any derived class
  abstract getAllPersons(): Promise<Person[]>;
  abstract createPerson(newPerson: Person): Promise<void>;
  abstract getPersonById(id: number): Promise<Person | undefined>;
  abstract deletePersonById(id: number): Promise<boolean>;
  abstract deletePersons(): Promise<void>;
}

export default IPersonService;
