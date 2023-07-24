// Object = Instance
// Prototype -> inheritance -> diturunkan
// Constructor func -> auto generate Prototype

function Person(firstName, lastName) {
  this.firstName = firstName ?? "";
  this.lastName = lastName ?? "";
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const carens = new Person("Carens", "Wijaya");
const budi = new Person("Budi", "Hadi");

// Menambah Property ke Prototype
// Bukan ke dalam Constructor / Objectnya, tapi ke Prototypenya
Person.prototype.sayBye = function () {
  console.info(`Good Bye`);
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

// Proses pencarian property / function dalam object: cari di constructor, kalo ga ada cari di prototype
carens.sayBye();
budi.run();
