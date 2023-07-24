// Static = bersifat global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama
// Static langsung panggil nama class tanpa perlu instansiasi 'new'

class Configuration {
  static name = "Belajar Javascript Dasar";
  static version = 1;
  static author = "Carens";

  static generateKey() {
    return "ABC";
  }
}

console.info(Configuration.name);
console.info(Configuration.generateKey());

// Bila dipaksa menggunakan new, maka attribute nya dianggap tidak ada dalam instance karena menjadi milik class saja

const config = new Configuration();
console.info(config.name); // undefined
console.info(config.generateKey()); // error not a function
