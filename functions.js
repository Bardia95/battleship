const playerBoard = {
  "A": [false, false, false, false, false, false, false, false, false, false],
  "B": [false, false, false, false, false, false, false, false, false, false],
  "C": [false, false, false, false, false, false, false, false, false, false],
  "D": [false, false, false, false, false, false, false, false, false, false],
  "E": [false, false, false, false, false, false, false, false, false, false],
  "F": [false, false, false, false, false, false, false, false, false, false],
  "G": [false, false, false, false, false, false, false, false, false, false],
  "H": [false, false, false, false, false, false, false, false, false, false],
  "I": [false, false, false, false, false, false, false, false, false, false],
  "J": [false, false, false, false, false, false, false, false, false, false],
}

const compBoard = {
  "A": [false, false, false, false, false, false, false, false, false, false],
  "B": [false, false, false, false, false, false, false, false, false, false],
  "C": [false, false, false, false, false, false, false, false, false, false],
  "D": [false, false, false, false, false, false, false, false, false, false],
  "E": [false, false, false, false, false, false, false, false, false, false],
  "F": [false, false, false, false, false, false, false, false, false, false],
  "G": [false, false, false, false, false, false, false, false, false, false],
  "H": [false, false, false, false, false, false, false, false, false, false],
  "I": [false, false, false, false, false, false, false, false, false, false],
  "J": [false, false, false, false, false, false, false, false, false, false],
}


let leaderboard = {
  bardia: 500,
  j: 10,
  a: 1
}


let ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
}

let log = "";

let playerTurn = true
let direction = "horizontal";

let newGame = function() {
  for (let elements in compBoard) {
    for (let i= 0; i < compBoard[element].length; i++) {
      compBoard[element][i] = false;
    }
  }
  for (let elements in playerBoard) {
    for (let i= 0; i < playerBoard[element].length; i++) {
      playerBoard[element][i] = false;
    }
  }
}

let turn = function() {
  if (playerTurn) {
    playerTurn = false;
  }
}

let changeRotation = function() {
  if (direction == "horizontal") {
    direction = "vertical";
  } else {
    direction = "horizontal";
  }
}

let placePiece = (ship, dir) => {
  if (dir == "horizontal") {

  } else {

  }

}

let aiTurn = function() {

}

let





























