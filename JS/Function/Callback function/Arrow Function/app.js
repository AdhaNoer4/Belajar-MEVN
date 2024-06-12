// Arrow Function
//  adalah function expression yang di persingkat.

// Contoh perbandiagan

// Function biasa

// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(5);

// Function Expression

// const hasil = function (x) {
//   return x * x;
// };

// Arrow Function

// const hasil = (x) => {
//   return x * x;
// };

const rand = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Implisit Arrow Function
// adalah Arrow function yang dapat tanpa menggunakan return untuk menyimpan nilai ke dalam variable
// Implisit arrow function hanya bisa digunakan pada satu baris proses / logila saja.
// Implisit arrow function menggunakan () bukan {} untuk menulis dengan beda baris

// CONTOH

const random = () => Math.floor(Math.random() * 100) + 1;
