let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let web = document.getElementById("main-title");
  web.textContent = "Doms webpage";
  // Part 2
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
  // Part 3
  let fav = document.querySelector("#favorite-things");
  fav.removeChild(fav.lastElementChild);
  console.log(fav);
  // Part 4
  let font = document.querySelectorAll(".special-title");
  for (i of font) {
    i.style.fontSize = "3rem";
  }

  // Part 5
  let race = document.querySelector("#past-races");
  console.log(race);
  for (let i of race.childNodes) {
    console.log(i);
    if (i.textContent === "Chicago") {
      i.remove();
    }
  }

  // Part 6
  let newRace = document.createElement("li");
  newRace.textContent = "Denver";
  race.appendChild(newRace);

  // Part 7
  let blog = document.createElement("div");
  blog.setAttribute("class", "blog-post purple");
  blog.innerHTML = `<h1>Parker</h1>
<p>Parker is Beautiful!</p>`;
  let main1 = document.querySelector(".main");

  main1.appendChild(blog);

  // Part 8
  let quote = document.querySelector("#quote-title");
  quote.addEventListener("click", () => randomQuote());

  // Part 9
  let post1 = document.querySelectorAll(".blog-post");

  for (let i of post1) {
    for (j of i.children) {
      j.style.pointerEvents = "none";
    }

    i.addEventListener("mouseout", (event) => {
      event.target.classList.toggle("purple");
      event.target.classList.toggle("red");
    });
    i.addEventListener("mouseenter", (event) => {
      event.target.classList.toggle("purple");
      event.target.classList.toggle("red");
    });
  }
});
