// SetTimeout
// berfungsi untuk menjalankan proses setelah beberapa detik / menunda proses dalam waktu yang ditentukan

console.log("Halo...");
setTimeout(() => {
  console.log("Lu masih disitu gak?");
}, 5000); // menunda proses selama 5000 = 5 detik
console.log("Gw tinggal dulu yak...");

// SetInterval
// Berfungsi untuk menjalankan proses berulang ulang dengan inerval waktu yg ditentukan.

const inter = setInterval(() => {
  console.log("muncul kembali dalam 5 detik");
}, 5000);

// gunakan clearInterval(inter); untuk menghentikan perulangan