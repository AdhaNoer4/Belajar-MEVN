//Spread operator
// digunakan untuk menggabungkan 2 array / objek

// array
const angka = [1, 2, 3, 4, 5];

const nama = ["budi", "cici", "alucard", "gusion"];

const campuran = [...angka, ...nama];

// Object
const user = {
  name: "adha",
  email: "adha@gmail.com",
  role: "admin",
};

const credential = {
  password: 1234,
  token: "ikhsd98khwfd0u",
};

const userBaru = { ...user, ...credential };

// const pemenang = (gold, silver, bronze, ...sisa) => {
//   console.log(`Gold medal diraih oleh ${gold}`);
//   console.log(`Silver medal diraih oleh ${silver}`);
//   console.log(`bronze medal diraih oleh ${bronze}`);
//   console.log(`sisanya ${sisa}`);
// };

// Destruction Array
// bongkar array

const [gold, silver, bronze] = nama;

// Destruction object

const { name, email, phone } = user;

