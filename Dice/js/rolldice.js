"use strict";
let rollbtn = document.getElementById("dicebtn");
let winner = false;
let scores = [0, 0];

rollbtn.addEventListener("click", rolling);

function handler(event) {
  if (event.key == "r") {
    rolling(event);
  }
}

document.addEventListener("keydown", handler);

let number;
let maxScore = 100;

let players = [1, 2];

let activeplayer = players[0];

let firstplayer = document.querySelector("#playerpanel");

firstplayer.classList.add("active");

function rolling(event) {
  number = Math.floor(Math.random() * 6) + 1;

  let dicePic = document.getElementById("dice-img");

  dicePic.src = `dice/${number}.png`;
  let playerpanel = document.querySelectorAll("#playerpanel");

  for (let pp of playerpanel) pp.classList.remove("active");

  playerpanel[activeplayer - 1].classList.add("active");

  let playerscore = document.getElementById("player" + activeplayer + "-score");

  scores[activeplayer - 1] += number;

  playerscore.innerHTML = scores[activeplayer - 1];

  if (scores[activeplayer - 1] >= 50) {
    document.removeEventListener("keydown", handler);
    rollbtn.removeEventListener("click", rolling);
    let ptag = document.createElement("p");
    ptag.innerHTML = `Winner Player ${activeplayer}`;
    ptag.classList.add("winner");
    document.querySelector(".wrapper").prepend(ptag);
  }

  activeplayer === 1 ? (activeplayer = 2) : (activeplayer = 1);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "n") {
    scores = [0, 0];
    winner = false;
    activeplayer = players[1];

    let playerscore = document.getElementById(
      "player" + activeplayer + "-score"
    );

    playerscore.innerHTML = 0;
    activeplayer = players[0];

    playerscore = document.getElementById("player" + activeplayer + "-score");
    playerscore.innerHTML = 0;

    document.addEventListener("keydown", handler);

    document.querySelector(".winner").remove();
    rollbtn.addEventListener("click", rolling);
  }
});
