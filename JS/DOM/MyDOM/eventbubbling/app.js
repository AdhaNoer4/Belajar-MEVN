const button = document.querySelector("#changecolor");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = generateRandomColor();
  e.stopPropagation(); // akan menghentikan proses selanjutnya, dalam hal ini mengehentikan proses dari parent container
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});

// fungsi untuk generate warna random
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
