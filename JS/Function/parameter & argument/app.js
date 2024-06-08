// parameter pada fungsi digunakan untuk input
function selamatPagi(name) {
  // di dalam kurung ini dinamakan Parameter
  console.log(`Selamat Pagi, ${name} dan Selamat datang!`);
}

selamatPagi("Adha"); // <-- di dalam kurung ini dinamakan Argument

// Multiple Parameter & Argument

// function jumlah(a, b) {
//   const hitung = a + b;
//   console.log(hitung);
// }

// jika parameter mau digunakan tanpa input terrlebih dahulu,
// tambahkan nilai default pada parameter
//contoh

// function jumlah(a = 0, b = 0) {
//   const hitung = a + b;
//   console.log(hitung);
// }

// Fungsi Return pada function
// Return digunakan untuk mengembalikan nilai hasil dari proses yang dilakukan oleh function
// nilai return dapat di simpan di dalam variable

function jumlah(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "bukan angka";
  }
  return a + b;
}
let angka1 = parseInt(prompt("masukan Angka Pertama!"));
let angka2 = parseInt(prompt("masukan Angka Kedua!"));
const hasil = jumlah(angka1, angka2);
alert(`Hasilnya adalah ${hasil}`);
