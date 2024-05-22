// let nilai = prompt("Masukan Nilai : ");

// if (nilai > 90) {
//   alert("A");
// } else if (nilai > 80) {
//   alert("B");
// } else if (nilai > 70) {
//   alert("C");
// } else if (nilai > 60) {
//   alert("D");
// } else {
//   alert("E");
// }

const pass = prompt("masukan password");
// cek apakah password lebih dari 6 karakter

if (pass.length >= 6) {
  // cek apakah password ada spasi
  if (pass.indexOf(" ") === -1) {
    console.log("password valid");
  } else {
    console.log("password tidak boleh ada spasi");
  }
} else {
  console.log("password minimal 6 karakter");
}
