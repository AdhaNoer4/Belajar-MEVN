const nilaiUjian = [80, 85, 75, 70, 90, 95];

// Every
// akan mengembalikan nilai boolean. true pada saat seluruh nilai yang ada pada suatu array
// memiliki kriteria yang sama, false jika sebaliknya
// Seperti logika boolean AND

const isLulus = nilaiUjian.every((nilai) => nilai >= 75);

//Some

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

// Some
// Mirip Dengan every tapi lebih fleksibel. hasilnya akan true jika salah satu isi
// dari array memiliki kriteria yang sama
// akan false jika sama sekali tidak ada yang sesuai kriteria
// Seperti logika boolean OR

// contoh objek mangas di atas adalah daftar dari manga yang saya pinjam
// saya ingin cek apakah saya pinjam manga yang dibuat lebih dari tahun 2010

const pinjamManga = mangas.some((pinjam) => pinjam.tahun > 2010);
