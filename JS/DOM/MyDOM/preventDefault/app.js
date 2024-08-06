const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#note");

// input.addEventListener("change", (e) => {
//   console.log("berubah");
// });

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault berfungsi agar form setelah di submit tidak pindah halaman
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

// Event Delegation = memanipulasi node / element esuai target
list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log('link di klik');
// });
