//   for map set first char: -1 and second char :0
let map = new Map();
let input = document.querySelector(".box>.input");

window.addEventListener("DOMContentLoaded", fetchDataFromLocal);

function fetchDataFromLocal() {
  let first = document.querySelector(".list>.li1");
  let second = document.querySelector(".list>.li2");
  // when document is loaded just show that in list
  let first_movie_character;
  let second_movie_character;
  first_movie_character = JSON.parse(
    localStorage.getItem("first_movie_character")
  );
  second_movie_character = JSON.parse(
    localStorage.getItem("second_movie_character")
  );
  if (first_movie_character && first_movie_character.length > 0) {
    let ul = document.createElement("ul");
    first_movie_character.map((element) => {
      map.set(element, -1);
      let li = document.createElement("li");
      li.innerHTML = element;
      ul.appendChild(li);
    });
    first.innerHTML = "";
    first.appendChild(ul);
  }
  if (second_movie_character && second_movie_character.length > 0) {
    let ul = document.createElement("ul");
    second_movie_character.map((element) => {
      if (map.get(element) === -1 || map.get(element) === 1) {
        map.set(element, 1);
      } else {
        map.set(element, 0);
      }

      let li = document.createElement("li");
      li.innerHTML = element;
      ul.appendChild(li);
    });
    second.innerHTML = "";
    second.appendChild(ul);
  }

  map.forEach(valKey);
}

// just print character in three div
function valKey(value, key) {
  let li = document.createElement("li");
  switch (value) {
    case -1:
      let first = document.querySelector(".movie-class>.class1>ul");
      li.innerHTML = key;
      first.appendChild(li);
      break;
    case 1:
      let second = document.querySelector(".movie-class>.class2>ul");
      li.innerHTML = key;
      second.appendChild(li);
      break;
    case 0:
      let third = document.querySelector(".movie-class>.class3>ul");
      li.innerHTML = key;
      third.appendChild(li);
      break;
    default:
      break;
  }
}

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    saveToLocalStorage(e.target);
  }
});

function saveToLocalStorage(input) {
  let localStorageArr = JSON.parse(localStorage.getItem(input.name));
  let value = input.value.replace(/\s+/g, " ").trim();
  if (localStorageArr === null || localStorageArr === undefined)
    localStorageArr = [];

  if (value.length > 2) {
    localStorageArr.push(value);
    localStorage.setItem(input.name, JSON.stringify(localStorageArr));
    appendMovies(input, value);
  }
}

function createCategory() {
  document.querySelector(".movie-class>.class1>ul").innerHTML = "";
  document.querySelector(".movie-class>.class2>ul").innerHTML = "";
  document.querySelector(".movie-class>.class3>ul").innerHTML = "";
  map.forEach(valKey);
}

function appendMovies(input, value) {
  let first = document.querySelector(".list>.li1>ul");
  let second = document.querySelector(".list>.li2>ul");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerHTML = value;
  //   entry in first input field
  if (input === input.parentNode.firstElementChild) {
    if (map.get(value) == 0 || map.get(value) == 1) {
      map.set(value, 1);
      createCategory();
    } else {
      map.set(value, -1);
      createCategory();
    }
    if (first === null) {
      ul.appendChild(li);
      let list1 = document.querySelector(".list>.li1");
      list1.innerHTML = "";
      list1.appendChild(ul);
    } else {
      first.appendChild(li);
    }

    // entry in second input field
  } else {
    if (map.get(value) === -1 || map.get(value) === 1) {
      map.set(value, 1);
      createCategory();
    } else {
      map.set(value, 0);
      createCategory();
    }

    if (second === null) {
      ul.appendChild(li);
      let list2 = document.querySelector(".list>.li2");
      list2.innerHTML = "";
      list2.appendChild(ul);
    } else {
      second.appendChild(li);
    }
  }
}
