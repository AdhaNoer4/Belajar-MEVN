// const req = new XMLHttpRequest();
// let data

// req.onload = function () {
//     data = JSON.parse(this.responseText);
//   console.log(this);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// request api dengan fetch async await

// const loadpeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (error) {
//     console.log("Error", err);
//   }
// };

// loadpeople();

// Mengunakan library axios untuk request data from api
axios
  .get("https://swapi.dev/api/people/5")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
    alert(err.message);
  });

// Axios async await

const getPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    console.log(err.response.status);
    console.log(err.response.data);
  }
};
