import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();
import { searchImages, append } from "./fetch.js";

const API = "iFvlnGJN-wTFmvKPQo0T7nTrwW1Ad3hNkuJ-VaGGoxs";

let search = (e) => {
  if (e.key === "Enter") {
    let value = document.getElementById("query").value;
    searchImages(API, value).then((data) => {
      console.log(data);
      let container = document.getElementById("container");
      container.innerHTML = null;
      append(data.results, container);
    });
  }
};

let categories = document.getElementById("categories").children;

function catSearch() {
  console.log(this.id);
  searchImages(API, this.id).then((data) => {
    console.log(data);
    let container = document.getElementById("container");
    container.innerHTML = null;
    append(data.results, container);
  });
}

for (let el of categories) {
  el.addEventListener("click", catSearch);
}

document.getElementById("query").addEventListener("keydown", search);
