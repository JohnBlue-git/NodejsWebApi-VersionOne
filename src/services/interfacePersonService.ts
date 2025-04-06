
abstract class IPersonService {
  // Constructor to prevent instantiation of this class
  constructor() {
    if (new.target === IPersonService) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  // Methods that must be implemented by any derived class
  abstract getAllPersons(): Promise<any[]>; // Adjust the return type as necessary
  abstract createPerson(data: { name: string; age: number }): Promise<any>; // Adjust type of 'data'
  abstract getPersonById(id: number): Promise<any>; // Adjust return type as necessary
  abstract deletePersonById(id: number): Promise<boolean>;
  abstract deletePersons(): Promise<void>;
}

export default IPersonService;
