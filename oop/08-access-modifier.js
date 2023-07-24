// Public = Bisa diakses dari luar class
// Private = Bisa diakses hanya dari dalam class saja

class Customer {
  // Otomatis ke assign menjadi Public Attributes tanpa melalui constructor / this

  firstName;
  lastName;
  balance = 0;

  // Untuk private attribute / method bisa menambahkan #
  #nik;

  get nik() {
    return this.#nik;
  }

  set nik(value) {
    this.#nik = value;
  }

  say(name) {
    name ? this.#sayWithName(name) : this.#sayWithoutName(name);
  }

  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }

  #sayWithoutName() {
    console.info(`Hello`);
  }
}

const carens = new Customer();
console.info(carens);

carens.firstName = "Carens";
console.info(carens);

// carens.#nik = 123; // error karena private
carens.nik = 123;
console.info(carens.nik);

carens.say();
carens.say("Budi");
