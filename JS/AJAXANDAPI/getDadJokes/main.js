const jokes = document.querySelector("#joke");
const button = document.querySelector("button");

const addJokes = async () => {
  const jokeText = await getJokes();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "Jokes not Available";
  }
};

button.addEventListener("click", addJokes);
