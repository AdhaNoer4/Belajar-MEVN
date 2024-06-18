const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter
// adalah sebuah fungsi untuk memfilter / menyaring data yang ada dalam sebuah array / objek

const angkaGanjil = angka.filter((n) => {
  return n % 2 === 1;
});

//Contoh 2

const animes = [
  {
    judul: "Naruto",
    rate: 90,
    tahun: 2002,
  },
  {
    judul: "Boruto",
    rate: 80,
    tahun: 2016,
  },
  {
    judul: "One Piece",
    rate: 95,
    tahun: 2001,
  },
  {
    judul: "Demon Slayer",
    rate: 85,
    tahun: 2018,
  },
];

// Filter objek animes untuk mencari anime bagus berdasarkan rate
const animeBagus = animes.filter((anime) => {
  return anime.rate > 85;
});

const animeBiasa = animes.filter((anime) => {
  return anime.rate < 85;
});

// Filter objek animes untuk mencari anime baru dan anime lama
const animeBaru = animes.filter((anime) => anime.tahun > 2010);
const animeLama = animes.filter((anime) => anime.tahun < 2010);

// Map objek animes untuk mengambil property judul dari anime baru
const judulAnimeBaru = animeBaru.map((anime) => anime.judul);
