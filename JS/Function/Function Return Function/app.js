function hasilnyaAdalahFunction() {
  const rand = Math.random();

  // sebuah function dapat mengembalikan function lagi untuk di simpan di variable
  return function () {
    if (rand > 0.1) {
      console.log("Selamat Anda mendapat Angka lebih besar " + rand);
    } else {
      console.log("Mohon maaf angka anda kecil coba lagi! " + rand);
    }
  };
}

// const hasil = hasilnyaAdalahFunction();
