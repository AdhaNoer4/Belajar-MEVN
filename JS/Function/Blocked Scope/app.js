let lebar = 8;
if (lebar > 5) {
  let panjang = 10;
  // console.log(panjang);
}
// console.log(panjang);
// karena menggunakan variable tipe let & const
// variable panjang tidak dapat digunakan di luar scope / fungsi / bracket /kurung kurawal

// agar variabel dapat digunakan diluar scope / bersifat global dapat menggunakan variable tipe var
for (let index = 0; index < 10; index++) {
  var element = index;
  console.log(element);
}

alert(element);
