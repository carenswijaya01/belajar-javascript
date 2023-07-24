// throw new Error = mengirimkan pesan error

// Class Error (membuat class error sendiri)
class ValidationError extends Error {
  constructor(message, field) {
    super(message); // assign message ke super
    this.field = field;
  }
}

class People {
  say(name) {
    if (!name) {
      // throw new Error("Harus ada parameter name");

      throw new ValidationError(
        "Harus ada parameter nama yang dilemparkan",
        "name"
      );
    }

    console.info(`Hello ${name}`);
  }
}

const carens = new People();

// Bila terjadi error, lempar ke catch untuk proses selanjutnya
try {
  carens.say(); // Uncaught Error: Harus ada parameter name
  carens.say("Budi");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(
      `Terjadi error pada field: ${error.field} dengan message: ${error.message}`
    );
  } else {
    console.error(`Terjadi error: ${error.message}`);
  }
} finally {
  // Akan selalu di eksekusi entah error entah tidak
  console.info("Selesai");
}
