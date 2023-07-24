// Pewarisan

class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is Employee ${this.firstName}`);
  }

  employeeMethod() {
    console.info(`Ini Employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  // Kalau child tidak memiliki constructor, otomatis akan menggunakan parent constructor

  // Constructor Child
  constructor(firstName, lastName) {
    // Wajib panggil parent constructor dengan keyword 'super' dengan mengirim parameter yang berjumlah sama dengan parentnya
    // constructor(firstName) { ... } -> parent

    super(firstName);
    this.lastName = lastName;

    // Kalau semisal parent tidak memiliki constructor yang "visible", tetap harus menambah constructor parent yang "invinsible", yaitu ();
    // super();
  }

  // Overload Method dari Employee
  sayHello(name) {
    console.info(
      `Hello ${name}, my name is Manager ${this.firstName} ${this.lastName}`
    );
  }

  // Bisa panggil super method dengan super.namaMethod
  managerMethod() {
    super.employeeMethod();
    console.info(`Ini Manager ${this.firstName} ${this.lastName}`);
  }
}

const budi = new Employee("Budi");
budi.sayHello("Joko");

const carens = new Manager("Carens", "Wijaya");
carens.sayHello("Joko");

console.info(budi);
console.info(carens);

budi.employeeMethod();
carens.managerMethod();
