const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#note");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault berfungsi agar form setelah di submit tidak pindah halaman
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log('link di klik');
// });
