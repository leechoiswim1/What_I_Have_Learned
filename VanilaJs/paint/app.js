const canvas = document.getElementById("jsCanvas");
console.log(canvas);
//이안의 픽셀들을 조절함.
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
//pixel modifier에 사이즈를 줘야함
canvas.width = 700;
canvas.height = 700;

//기본 배경색 지정 (지정하지않으면 배경이 투명하게 저장된다.)
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//기본 선색 스타일
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
//기본 선두께
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//painting이 false가된다.
function stopPainting() {
  painting = false;
}
//painting이 true가된다.
function startPainting() {
  painting = true;
}

//마우스를 움직일때 계속 생기는 이벤트 (fill/paint 구분)
//마우스가 요소위에서 움직일때 발생하는 이벤트 :x,y좌표값을 받는다.
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //beginPath:새 경로를 만듭니다. 넣지않으면 경로가 초기화가 안됨
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
//path는 선이다.

function handleChangeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
//선두께 변경 함수
function handleLineWidth(event) {
  const width = event.target.value;
  ctx.lineWidth = width;
}

function handleChangeMode() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

//fill모드일경우 캔버스 전체 칠하기
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
// 마우스 우클릭 방지
function handleCM(event) {
  event.preventDefault();
}

function handleSaveImage() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]";
  link.click();
}

if (canvas) {
  //마우스가 요소위에서 움직일때 발생하는 이벤트
  canvas.addEventListener("mousemove", onMouseMove);
  //마우스 클릭유지시 발생하는 이벤트
  canvas.addEventListener("mousedown", startPainting);
  //마우스 클릭해지시 발생하는 이벤트
  canvas.addEventListener("mouseup", stopPainting);
  //마우스가 요소위를 떠날때 발생하는 이벤트
  canvas.addEventListener("mouseleave", stopPainting);
  //마우스가 요소를 클릭할때 발생하는 이벤트
  canvas.addEventListener("click", handleCanvasClick);
  //마우스 우클릭 방지
  canvas.addEventListener("contextmenu", handleCM);
}

//colors는 HTMLCollection(요소의 문서내 정렬된 일반컬렉션== 유사배열)이다.
//Array.from() 을 써서 유사 배열 객체를 배열로 바꾼다.
//선색 변경 이벤트 리스너 생성

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleChangeColor)
);

if (range) {
  range.addEventListener("input", handleLineWidth);
}

if (mode) {
  mode.addEventListener("click", handleChangeMode);
}

if (save) {
  save.addEventListener("click", handleSaveImage);
}
