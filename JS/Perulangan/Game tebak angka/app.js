// tebak();
// cobaLagi();

// function tebak() {
//   let max = parseInt(prompt("Masukan Nilai Maksimal!"));

//   while (!max) {
//     max = parseInt(prompt("Wajib Masukan Nilai Maksimal"));
//   }

//   const targetNum = Math.floor(Math.random() * max) + 1;
//   console.log(targetNum);

//   let guess = parseInt(prompt("isi angka pertamamu!"));
//   let percobaan = 1;

//   while (parseInt(guess) !== targetNum) {
//     percobaan++;
//     if (guess > targetNum) {
//       guess = parseInt(prompt("Terlalu tinggi! Tebak Lagi!"));
//     } else {
//       guess = parseInt(prompt("Terlalu rendah! Tebak lagi"));
//     }
//   }
//   alert("anda berhasil. dalam percobaan ke : " + percobaan);
// }

// function cobaLagi(params) {
//   let yes = "y";
//   let no = "n";
//   let coba = prompt("Apakah anda ingin bermain lagi? (y/t) :");
//   if (coba === yes) {
//     tebak();
//   } else if (coba === no) {
//     alert("Terimakasih telah bermain!");
//     exit();
//   } else {
//     coba = prompt("Tolong isi denagn (y/n)!");
//   }
// }

let max = parseInt(prompt("Masukan Nilai Maksimal!"));

  while (!max) {
    max = parseInt(prompt("Wajib Masukan Nilai Maksimal"));
  }

  const targetNum = Math.floor(Math.random() * max) + 1;
  console.log(targetNum);

  let guess = parseInt(prompt("isi angka pertamamu!"));
  let percobaan = 1;

  while (parseInt(guess) !== targetNum) {
    percobaan++;
    if (guess > targetNum) {
      guess = parseInt(prompt("Terlalu tinggi! Tebak Lagi!"));
    } else {
      guess = parseInt(prompt("Terlalu rendah! Tebak lagi"));
    }
  }
  alert("anda berhasil. dalam percobaan ke : " + percobaan);