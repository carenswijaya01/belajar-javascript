// Untuk manipulasi data string

const value = "Carens Kurniawan Wijaya";

// Cari panjang
console.info(value.length);

// UPPERCASE
console.info(value.toUpperCase());

// lowercase
console.info(value.toLowerCase());

// split
console.info(value.split(" "));

const value2 = "   input data     ";

// Hapus white space kiri dan kanan saja
console.info(value2.trim());
// Hapus di kiri
console.info(value2.trimStart());
// Hapus di kanan
console.info(value2.trimEnd());
