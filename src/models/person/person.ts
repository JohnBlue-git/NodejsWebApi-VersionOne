
class Person {
  private name: string;
  private age: number;

  // Constructor with type annotations
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Static method to create a new Person instance
  static create(data: { name: string; age: number }): Person {
    return new Person(data.name, data.age);
  }

  // Getter for name
  getName(): string {
    return this.name;
  }

  // Getter for age
  getAge(): number {
    return this.age;
  }

  // Setter for name
  setName(name: string): void {
    this.name = name;
  }

  // Setter for age
  setAge(age: number): void {
    this.age = age;
  }
}

// Export the class in TypeScript format
export default Person;
