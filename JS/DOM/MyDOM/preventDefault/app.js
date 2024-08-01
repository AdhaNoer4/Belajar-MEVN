const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault berfungsi agar form setelah di submit tidak pindah halaman
  console.log("submitted");
});

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log('link di klik');
});
