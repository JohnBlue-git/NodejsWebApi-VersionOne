import Person from '../../models/person/person';

class PersonSerializer {
  // Serialize a single Person instance to a plain object
  static serialize(person: Person): { name: string; age: number } {
    return {
      name: person.getName(),
      age: person.getAge(),
    };
  }

  // Serialize an array of Person instances
  static serializeMultiple(persons: Person[]): { name: string; age: number }[] {
    return persons.map(this.serialize);
  }

  // Deserialize a JSON object into a Person instance
  static deserialize(json: { name: string; age: number }): Person {
    // Assuming the JSON has 'name' and 'age' properties
    if (!json.name || !json.age) {
      throw new Error('Invalid JSON format for Person');
    }

    // Create a new Person object
    return new Person(json.name, json.age);
  }

  // Deserialize an array of JSON objects into Person instances
  static deserializeMultiple(jsonArray: { name: string; age: number }[]): Person[] {
    return jsonArray.map(this.deserialize);
  }
}

export default PersonSerializer;
