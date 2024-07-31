const button = document.querySelector("button");
const h2 = document.querySelector("h2");

button.addEventListener("click", () => {
  const warnaBaru = generateRandomColor();
  document.body.style.backgroundColor = warnaBaru;
  h2.innerText = warnaBaru;
});

// fungsi untuk generate warna random
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
