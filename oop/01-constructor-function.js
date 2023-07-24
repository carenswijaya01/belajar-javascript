// Penulisan Constructor Function umumnya menggunakan PascalCase (Person, PremiumMember, etc)

function Person(firstName, lastName) {
  // Property yang akan dipunya Object secara default
  this.firstName = firstName ?? "";
  this.lastName = lastName ?? "";

  // Function yang akan dipunya Object secara default
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const carens = new Person();
//Set value manual
carens.firstName = "Carens";

//Set value dengan parameter
const budi = new Person("Budi", "Hadi");

console.log(carens);
console.log(budi);

carens.sayHello("Budi");
budi.sayHello("Carens");
