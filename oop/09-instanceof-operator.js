// Untuk cek sebuah object merupakan instance dari class tertentu / bukan

class Employee {}

class Manager {}

// Bila menggunakan inheritance
class Leader extends Employee {}

const budi = new Employee();
const eko = new Manager();
const carens = new Leader();

console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false
console.info(eko instanceof Employee); // false
console.info(eko instanceof Manager); // true

// Bila menggunakan inheritance
console.info(carens instanceof Leader); // true
console.info(carens instanceof Employee); // true
