// Constructor Inheritance = memanggil constructor lain di dalam constructor

function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName); // sama aja nge clone isi function Employee
  this.lastName = lastName;
}

const carens = new Manager("Carens", "Wijaya");
console.info(carens);
