// Konversi ke tipe data number
// Jika tidak bisa dikonversi, otomatis jadi NaN (Not a Number)

const input = "12345";
const number = Number(input);

console.info(typeof input); // string
console.info(typeof number); // number
console.info(number);

console.info(Number("Carens")); // NaN

// Static Properties
console.info(Number.MIN_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_VALUE);
console.info(Number.MAX_SAFE_INTEGER);

// Static Method
const data = Number("12345");
console.info(Number.isNaN(data)); // false
console.info(Number.isInteger(data)); // true

const value = Number("12345");
console.info(value.toString(2)); // ubah ke binary
console.info(value.toLocaleString("id-ID")); // ubah ke desimal separator
