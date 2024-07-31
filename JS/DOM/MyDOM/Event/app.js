const btnclick = document.getElementById("clickme");

btnclick.onclick = () => {
  console.log("You clicked Me!");
};

const scream = () => {
  console.log("dont touch me!");
};

btnclick.onmouseover = scream;

const btnevent = document.querySelector("#addevent");

// btnevent.addEventListener("click", function () {
//   alert("ini button add Event");
// });

btnevent.addEventListener("click", stepSatu);
btnevent.addEventListener("click", stepDua);

function stepSatu() {
  console.log("Step Satu");
}

function stepDua() {
  console.log("Step Dua");
}
