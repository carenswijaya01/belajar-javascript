// Class = Pengganti Constructor Function (ES lama)

class Person {
  // Constructor
  constructor(name) {
    // Property
    this.name = name;
  }

  // Method
  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

const carens = new Person("Carens");
console.log(carens);
carens.sayHello("Budi");
