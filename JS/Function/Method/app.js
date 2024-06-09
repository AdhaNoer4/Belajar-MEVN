function myFunc() {
  // Function biasa
  console.log("Hi");
  return "Hello";
}

// Method di Javascript adalah function yang didefinisikan di dalam property di sebuah Objek

const myMath = {
  // Method
  perkalian: function (x, y) {
    return x * y;
  },
};

// this dalam Method
// Berfungsi untuk memanggil property yang ada di dalam object yang sama

const saya = {
  nama: "Adha",
  hobi: "Main Game",
  kenalan: function () {
    return `Halo Saya ${this.nama}. Hobi Saya ${this.hobi}`;
  },
};
