const buttons = document.getElementsByTagName("button");
const headings = document.getElementsByTagName("h1");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

for (let heading of headings) {
  heading.addEventListener("click", colorize);
}

const generatecolor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

function colorize() {
  this.style.backgroundColor = generatecolor();
  this.style.color = generatecolor();
}
