// Question 1

(a, b) => {
  return a - b;
};

// Question 2

const sportGames = "https://api.rawg.io/api/games?genres=sports";

fetch(sportGames)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.dir(json);
  })
  .catch(function (error) {
    window.location.href = "error.html";
  });

// Question 3

let p = document.querySelector("p").innerHTML;

const newp = p.replace("cats", "giraffes");

document.querySelector("p").innerHTML = newp;

// Question 4

const q = document.location.search;
const params = new URLSearchParams(q);

const baseUrl = "https://my.site.com";
const userUrl = `${baseUrl}?userId=`;
let userId = "7";

const userPage = userUrl + userId;
if (userId === "") {
  window.location.href = "third.html";
} else if (userId < 10) {
  window.location.href = "first.html";
} else if (userId > 10) {
  window.location.href = "second.html";
} else {
  window.location.href = "error.html";
}
console.log(userPage);

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6

const animalList = document.querySelector(".animals");
const newAnimal = document.createElement("li");
const elephants = document.querySelector(".elephants");

newAnimal.className = "parrots";
newAnimal.innerText = "Parrots";

animalList.appendChild(newAnimal);
newAnimal.after(elephants);

// Question 7

const gamesUrl = "https://api.rawg.io/api/games/3801";

fetch(gamesUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createRating(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function createRating(rating) {
  const ratingContainer = document.querySelector(".rating");
  ratingContainer.innerText = rating.rating;
}
