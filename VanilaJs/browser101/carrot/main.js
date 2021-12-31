const background = document.querySelector(".body-background");
const headerPlayBtn = document.querySelector(".header-playbtn");
const headerItemTime = document.querySelector(".header-timer__time");

const resultBox = document.querySelector(".result-box");
const resultBoxBtn = document.querySelector(".result-box");
let time = 9;

function handleClickCarrot(event) {
  event.target.style.display = "none";
}

function start() {
  if (background.children.length < 20) {
    resultBox.style.display = "none";
    for (let i = 0; i < 10; i++) {
      let carrot = document.createElement("img");
      let bug = document.createElement("img");
      carrot.classList.add("body-carrot__image");
      carrot.src = "img/carrot.png";
      carrot.style.position = "absolute";
      carrot.style.left = `${Math.floor(Math.random() * 100)}%`;
      carrot.style.top = `${Math.floor(Math.random() * 100)}%`;
      carrot.addEventListener("click", handleClickCarrot);
      bug.classList.add("body-bug__image");
      bug.src = "img/bug.png";
      bug.style.position = "absolute";
      bug.style.left = `${Math.floor(Math.random() * 100)}%`;
      bug.style.top = `${Math.floor(Math.random() * 100)}%`;
      background.append(bug, carrot);
    }
  } else return;
}

function setClock() {
  if (time >= 1) {
    headerItemTime.innerText = `0:${time}`;
    return (time = time - 1);
  } else {
    headerItemTime.innerText = `0:0`;
    resultBox.style.display = "flex";
  }
}

function handleGameStart() {
  start();
  resultBox.style.display = "none";
  if (time >= 0) {
    setInterval(setClock, 1000);
  } else return (time = 9);
}

function handleGameRestart() {
  background.innerHTML = "";
  resultBox.style.display = "none";
  start;
}

headerPlayBtn.addEventListener("click", handleGameStart);
resultBoxBtn.addEventListener("click", handleGameRestart);
