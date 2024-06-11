const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// foreach
// adalah sebuah fungsi perulangan untuk array dan dapat mengulang sebanyak panjang arraynya
// tanpa memberikan batas perulangannya terlebih dahulu

angka.forEach(function (el) {
  //ini adalah callback function
  if (el % 2 === 0) {
    console.log(el);
  }
});

//Contoh 2

const animes = [
  {
    judul: "Naruto",
    rate: 90,
  },
  {
    judul: "Boruto",
    rate: 80,
  },
  {
    judul: "One Piece",
    rate: 95,
  },
  {
    judul: "Demon Slayer",
    rate: 85,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.judul}-${anime.rate}`);
});
