const nilaiUjian = [80, 85, 75, 70, 90, 95];

// Reduce
// melakukan proses sebanyaknya element milik suatu array, nilai baliknya adalah single value

const total = nilaiUjian.reduce((totalAwal, totalSekarang) => {
  return totalAwal + totalSekarang;
});

const mangas = [
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

// reduce method bisa digunakan untuk membandingkan dan untuk mencari manga yang terbaik

const bestManga = mangas.reduce((bestManga, currManga) => {
  console.log(bestManga, currManga);
  if (currManga.rate > bestManga.rate) {
    return currManga;
  }
  return bestManga;
});
