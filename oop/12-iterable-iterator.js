// Iterable = tipe data yang bisa di iterasi string, Array, Object, dan lain lain menggunakan for..of

// Membuat class Iterable sendiri
class CounterIteratorResult {
  constructor(value, done) {
    this.done = done;
    this.value = value;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        // Sudah melewati maksimal
        return new CounterIteratorResult(this.value, true);
      } else {
        // Kalau masih bisa di iterasi
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new Counter(1, 10);

for (const el of counter) {
  console.info(el);
}
