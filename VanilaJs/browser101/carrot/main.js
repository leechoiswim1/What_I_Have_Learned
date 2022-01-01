const background = document.querySelector(".body-background");
const headerPlayBtn = document.querySelector(".header-playbtn");
const headerItemTime = document.querySelector(".header-timer__time");

const resultBox = document.querySelector(".result-box");
const resultBoxBtn = document.querySelector(".result-box");

const carrotCntText = document.querySelector(".header-counter__number");
const resultBoxText = document.querySelector(".result-box__text");

const bgmAudio = document.querySelector("#bgmAudio");
const bugAudio = document.querySelector("#bugAudio");
const carrotAudio = document.querySelector("#carrotAudio");
const winAudio = document.querySelector("#winAudio");
const alertAudio = document.querySelector("#alertAudio");

let time = 9;
let gameState = false;
let carrotCnt = 10;

const interval = setInterval(setClock, 1000);

function stopbgm() {
  bgmAudio.pause();
  bgmAudio.currentTime = 0;
}

function handleClickCarrot(event) {
  if (event.target.className !== "body-bug__image") {
    carrotAudio.play();
    if (carrotCnt > 1) {
      const carrotImg = event.target;
      carrotImg.remove();
      carrotCnt = carrotCnt - 1;
      carrotCntText.innerHTML = carrotCnt;
    } else if (carrotCnt === 1) {
      const carrotImg = event.target;
      carrotImg.remove();
      carrotCnt = carrotCnt - 1;
      carrotCntText.innerHTML = carrotCnt;
      stopbgm();
      winAudio.play();
      resultBoxText.innerText = "YOU WIN !";
      resultBox.style.display = "flex";
      gameState = false;
      setClock();
    }
  } else {
    bugAudio.play();
    stopbgm();
    gameState = false;
    resultBoxText.innerText = "YOU LOST💩";
    resultBox.style.display = "flex";
  }
}

function setClock() {
  if (gameState) {
    if (time > 0) {
      headerItemTime.innerText = `0:${time}`;
      time = time - 1;
    } else {
      bgmAudio.pause();
      bgmAudio.currentTime = 0;
      headerItemTime.innerText = `0:0`;
      resultBox.style.display = "flex";
    }
  } else {
    time = 9;

    headerItemTime.innerText = `0:0`;
    return;
  }
}

function handleGameStart(event) {
  if (!gameState) {
    gameState = true;
    bgmAudio.play();
    headerPlayBtn.innerHTML = `<i class="fas fa-stop fa-4x"></i>`;
    interval;
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
      bug.addEventListener("click", handleClickCarrot);
      background.append(bug, carrot);
    }
  } else {
    gameState = false;
    stopbgm();
    setClock();
    handleReset();
  }
}

function handleReset() {
  carrotCnt = 10;
  carrotCntText.innerHTML = carrotCnt;
  resultBox.style.display = "none";

  headerPlayBtn.innerHTML = `<i class="fas fa-play fa-4x"></i>`;
  background.innerHTML = "";
}

headerPlayBtn.addEventListener("click", handleGameStart);
resultBoxBtn.addEventListener("click", handleReset);
