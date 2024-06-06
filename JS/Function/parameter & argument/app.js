// parameter pada fungsi digunakan untuk input
function selamatPagi(name) {
  // di dalam kurung ini dinamakan Parameter
  console.log(`Selamat Pagi, ${name} dan Selamat datang!`);
}

selamatPagi("Adha"); // <-- di dalam kurung ini dinamakan Argument

// Multiple Parameter & Argument

function jumlah(a, b) {
  const hitung = a + b;
  console.log(hitung);
}

// jika parameter mau digunakan tanpa input terrlebih dahulu,
// tambahkan nilai default pada parameter
//contoh

function jumlah(a = 0, b = 0) {
  const hitung = a + b;
  console.log(hitung);
}
