const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map
// adalah sebuah fungsi yang dapat memodifikasi array di dalam sebuah function

const pangkat2 = angka.map(function (num) {
  return num * 2;
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

const capsAnime = animes.map(function (anime) {
  return anime.judul.toUpperCase();
});
