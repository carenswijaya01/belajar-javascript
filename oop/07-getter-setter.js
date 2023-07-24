// Getter Setter akan berada di Prototype, bukan di instance object

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const myValue = value.split(" ");
    this.firstName = myValue[0];
    this.lastName = myValue[1];
  }
}

const carens = new Person("Carens", "Wijaya");
console.info(carens);

console.info(carens.fullName);

carens.fullName = "Carens Kurniawan";
console.info(carens.fullName);
