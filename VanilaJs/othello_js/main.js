let blackBackground;

let gap = 3;
let cellWidth = 65;
let discLayer;
let turn = 1;
let scoreLabel;
let gameover = false;
let discs = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
window.onload = function () {
  blackBackground = document.getElementById("blackBackground");
  discLayer = document.getElementById("discLayer");
  blackBackground.style.width = cellWidth * 8 + gap * 9 + "px";
  blackBackground.style.height = cellWidth * 8 + gap * 9 + "px";
  drawGreenSquares();
  drawDiscs();
  drawCanMoveLayer();
};

function drawGreenSquares() {
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      let greenSquare = document.createElement("div");
      greenSquare.style.position = "absolute";
      greenSquare.style.width = cellWidth + "px";
      greenSquare.style.height = cellWidth + "px";
      greenSquare.style.backgroundColor = "green";
      greenSquare.style.left = (cellWidth + gap) * column + gap + "px";
      greenSquare.style.top = (cellWidth + gap) * row + gap + "px";
      greenSquare.setAttribute("onClick", `clickedSquare(${row}, ${column})`);
      blackBackground.appendChild(greenSquare);
    }
  }
}

function clickedSquare(row, column) {
  if (gameover) {
    return;
  }
  if (discs[row][column] !== 0) {
    return;
  } else if (canClickSpot(turn, row, column) == true) {
    let affectedDiscs = getAffectedDiscs(turn, row, column);
    flipDisks(affectedDiscs);
    discs[row][column] = turn;
    if (turn == 1 && canMove(2)) {
      turn = 2;
    } else if (turn == 2 && canMove(1)) {
      turn = 1;
    }
    if (canMove(2) === false && canMove(1) == false) {
      window.alert("Game Over");
      gameover = ture;
    }
    drawDiscs();
    drawCanMoveLayer();
    redrawScore();
  }
}

function canMove(id) {
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (canClickSpot(id, row, column)) {
        return true;
      }
    }
  }
  return false;
}

function redrawScore() {
  let ones = 0;
  let twos = 0;
  scoreLabel = document.getElementById("score");
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      let value = discs[row][column];
      if (value === 1) {
        ones += 1;
      } else if (value === 2) {
        twos += 1;
      }
    }
  }
  scoreLabel.innerHTML = `Black:${ones} White:${twos}`;
}

function canClickSpot(id, row, column) {
  let affectedDiscs = getAffectedDiscs(id, row, column);
  if (affectedDiscs.length == 0) {
    return false;
  } else {
    return true;
  }
}

function getAffectedDiscs(id, row, column) {
  let affectedDiscs = [];
  //to the right
  let couldBeAffected = [];
  let columnIterator = column;
  while (columnIterator < 7) {
    columnIterator += 1;
    let valueAtSpot = discs[row][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: row, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }
  //to the left
  couldBeAffected = [];
  columnIterator = column;
  while (columnIterator > 0) {
    columnIterator -= 1;
    let valueAtSpot = discs[row][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: row, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }

  //above
  couldBeAffected = [];
  let rowIterator = row;
  while (rowIterator > 0) {
    rowIterator -= 1;
    let valueAtSpot = discs[rowIterator][column];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: column };
      couldBeAffected.push(discLoction);
    }
  }
  //below
  couldBeAffected = [];
  rowIterator = row;
  while (rowIterator < 7) {
    rowIterator += 1;
    let valueAtSpot = discs[rowIterator][column];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: column };
      couldBeAffected.push(discLoction);
    }
  }
  //down right
  couldBeAffected = [];
  rowIterator = row;
  columnIterator = column;
  while (rowIterator < 7 && columnIterator < 7) {
    rowIterator += 1;
    columnIterator += 1;
    let valueAtSpot = discs[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }
  //down left
  couldBeAffected = [];
  rowIterator = row;
  columnIterator = column;
  while (rowIterator < 7 && columnIterator > 0) {
    rowIterator += 1;
    columnIterator -= 1;
    let valueAtSpot = discs[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }
  //above right;
  couldBeAffected = [];
  rowIterator = row;
  columnIterator = column;
  while (rowIterator > 0 && columnIterator < 7) {
    rowIterator -= 1;
    columnIterator += 1;
    let valueAtSpot = discs[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }
  //above left;
  couldBeAffected = [];
  rowIterator = row;
  columnIterator = column;
  while (rowIterator > 0 && columnIterator > 0) {
    rowIterator -= 1;
    columnIterator -= 1;
    let valueAtSpot = discs[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDiscs = affectedDiscs.concat(couldBeAffected);
      }
      break;
    } else {
      let discLoction = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(discLoction);
    }
  }

  return affectedDiscs;
}

function flipDisks(affectedDiscs) {
  for (let i = 0; i < affectedDiscs.length; i++) {
    let spot = affectedDiscs[i];
    if (discs[spot.row][spot.column] == 1) {
      discs[spot.row][spot.column] = 2;
    } else {
      discs[spot.row][spot.column] = 1;
    }
  }
}

function drawDiscs() {
  discLayer.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      let value = discs[row][column];
      if (value == 0) {
      } else {
        let disc = document.createElement("div");
        disc.style.position = "absolute";
        disc.style.width = cellWidth - 4 + "px";
        disc.style.height = cellWidth - 4 + "px";
        disc.style.borderRadius = "50%";
        disc.style.left = (cellWidth + gap) * column + gap + 2 + "px";
        disc.style.top = (cellWidth + gap) * row + gap + 2 + "px";

        if (value == 1) {
          disc.style.backgroundColor = "black";
          disc.style.backgroundImage = "radial-gradient(#333333 30%,black 70%)";
        } else if (value == 2) {
          disc.style.backgroundColor = "white";
          disc.style.backgroundImage = "radial-gradient(white 30%,#cccccc 70%)";
        }
        discLayer.appendChild(disc);
      }
    }
  }
}

function drawCanMoveLayer() {
  let canMoveLayer = document.getElementById("canMoveLayer");
  canMoveLayer.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      let value = discs[row][column];
      if (value == 0 && canClickSpot(turn, row, column)) {
        let discOutLine = document.createElement("div");
        discOutLine.style.position = "absolute";
        discOutLine.style.width = cellWidth - 8 + "px";
        discOutLine.style.height = cellWidth - 8 + "px";
        discOutLine.style.borderRadius = "50%";
        discOutLine.style.left = (cellWidth + gap) * column + gap + 4 + "px";
        discOutLine.style.top = (cellWidth + gap) * row + gap + 4 + "px";
        discOutLine.style.zIndex = 2;
        discOutLine.setAttribute("onClick", `clickedSquare(${row}, ${column})`);
        if (turn == 1) {
          discOutLine.style.border = "2px solid black";
        } else if (turn == 2) {
          discOutLine.style.border = "2px solid white";
        }
        canMoveLayer.appendChild(discOutLine);
      }
    }
  }
}
