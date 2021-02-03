// Assigning random values from 1-9 to be displayed on the front side of each cell in the table
for (let i = 0; i <= 8; i += 2) {
  for (let j = 1; j <= 9; j += 2) {
    document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes[
      i
    ].childNodes[j].childNodes[1].innerHTML = Math.floor(Math.random() * 9 + 1);
  }
}

let attemptsLeft = 5;
let round = 1;
let points = 0;
let boxesOpen = 0;
let boxes = []; //This array is now empty, but the elements of the array will be the cells that are clicked on by the user. The array resets, or empties, after each round.

//Each of the cells will have a 3D flip effect, switching the display to the user from the back side to the front side, when you click on them once.
$(".c1-container").one("click", function () {
  attemptsLeft--;
  cellClicked(0, 1); //This method is called to compute and keep track of the score for the game as well as the     changes made to the "boxes" array. The arguments are used to access the random number on the front side of the cell and add it as an element to the array.

  $("#c1-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c1-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c2-container").one("click", function () {
  attemptsLeft--;
  cellClicked(0, 3);

  $("#c2-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c2-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c3-container").one("click", function () {
  attemptsLeft--;
  cellClicked(0, 5);
  $("#c3-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c3-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c4-container").one("click", function () {
  attemptsLeft--;
  cellClicked(0, 7);
  $("#c4-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c4-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c5-container").one("click", function () {
  attemptsLeft--;
  cellClicked(0, 9);
  $("#c5-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c5-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c6-container").one("click", function () {
  attemptsLeft--;
  cellClicked(2, 1);
  $("#c6-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c6-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c7-container").one("click", function () {
  attemptsLeft--;
  cellClicked(2, 3);
  $("#c7-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c7-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c8-container").one("click", function () {
  attemptsLeft--;
  cellClicked(2, 5);
  $("#c8-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c8-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c9-container").one("click", function () {
  attemptsLeft--;
  cellClicked(2, 7);
  $("#c9-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c9-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c10-container").one("click", function () {
  attemptsLeft--;
  cellClicked(2, 9);
  $("#c10-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c10-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c11-container").one("click", function () {
  attemptsLeft--;
  cellClicked(4, 1);
  $("#c11-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c11-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c12-container").one("click", function () {
  attemptsLeft--;
  cellClicked(4, 3);
  $("#c12-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c12-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c13-container").one("click", function () {
  attemptsLeft--;
  cellClicked(4, 5);
  $("#c13-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c13-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});
$(".c14-container").one("click", function () {
  attemptsLeft--;
  cellClicked(4, 7);
  $("#c14-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c14-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c15-container").one("click", function () {
  attemptsLeft--;
  cellClicked(4, 9);
  $("#c15-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c15-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c16-container").one("click", function () {
  attemptsLeft--;
  cellClicked(6, 1);
  $("#c16-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c16-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c17-container").one("click", function () {
  attemptsLeft--;
  cellClicked(6, 3);
  $("#c17-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c17-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c18-container").one("click", function () {
  attemptsLeft--;
  cellClicked(6, 5);
  $("#c18-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c18-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c19-container").one("click", function () {
  attemptsLeft--;
  cellClicked(6, 7);

  $("#c19-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c19-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c20-container").one("click", function () {
  attemptsLeft--;
  cellClicked(6, 9);

  $("#c20-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c20-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c21-container").one("click", function () {
  attemptsLeft--;
  cellClicked(8, 1);

  $("#c21-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c21-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c22-container").one("click", function () {
  attemptsLeft--;
  cellClicked(8, 3);

  $("#c22-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c22-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c23-container").one("click", function () {
  attemptsLeft--;
  cellClicked(8, 5);

  $("#c23-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c23-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c24-container").one("click", function () {
  attemptsLeft--;
  cellClicked(8, 7);

  $("#c24-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c24-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

$(".c25-container").one("click", function () {
  attemptsLeft--;
  cellClicked(8, 9);

  $("#c25-back").css({ transform: "rotateY(-180deg)", cursor: "pointer" });
  $("#c25-front").css({ transform: "rotateY(0deg)", "cursor:": "pointer" });
});

//Clicking on the stop button will automatically skip the current round without losing/gaining any points that round
$("#stop").click(function () {
  attemptsLeft = 5;
  round++;
  boxes = []; //The box array will reset
  if (round > 5) {
    gameOver();
  } else {
    document.childNodes[1].childNodes[2].childNodes[5].innerHTML =
      "Round " + round;
    document.getElementById("attempts").textContent = attemptsLeft;
  }
});

//Clicking the restart button will restart the game after asking the user for confirmation to do so
$("#restart").click(function () {
  if (window.confirm("Are you sure you want to restart the game?")) {
    window.location.reload();
  }
});

function cellClicked(i, j) {
  boxes.push(
    document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes[
      i
    ].childNodes[j].childNodes[1].innerHTML
  );

  console.log(boxes);

  if (boxes.length === 5) {
    if (round === 5) {
      gameOver(); //When the game is over, this method will restart the game with the user's confirmation
    } else {
      //If the current round is over (5 attempts per round), the round number displayed and number of attempts left is updated
      round++;
      attemptsLeft = 5;
      document.childNodes[1].childNodes[2].childNodes[5].innerHTML =
        "Round " + round;
    }
  }
  document.getElementById("attempts").textContent = attemptsLeft;

  //Sorting the array from lowest number to highest
  if (boxes.length === 5) {
    for (let i = 0; i < boxes.length; i++) {
      for (let j = 0; j < boxes.length - 1; j++) {
        if (boxes[j] > boxes[j + 1]) {
          let temp = boxes[j];
          boxes[j] = boxes[j + 1];
          boxes[j + 1] = temp;
        }
      }
    }

    //Checking for matches
    let equalMatchCount = 0;
    for (let i = 0; i < boxes.length - 1; i++) {
      if (boxes[i] !== boxes[i + 1] && equalMatchCount >= 1) {
        break;
      }
      if (boxes[i] === boxes[i + 1]) {
        equalMatchCount++;
      }
    }

    //Adding up all the numbers in the array
    for (let i = 0; i < boxes.length; i++) {
      points += Number(boxes[i]);
    }

    //Checking for 5 consecutive numbers
    let consecutive = true;
    for (let i = 0; i < boxes.length - 1; i++) {
      if (boxes[i + 1] - boxes[i] !== 1) {
        consecutive = false;
        break;
      }
    }

    //Adding points from any wins
    if (Boolean(consecutive) === true) {
      points += Number(80);
    } else if (equalMatchCount === 4) {
      points += Number(100);
    } else if (equalMatchCount === 3) {
      points += Number(50);
    } else if (equalMatchCount === 2) {
      points += Number(20);
    } else {
      if (Number(points) - 25 <= 0) {
        points = 0;
      } else {
        points -= Number(25);
      }
    }

    document.getElementById("display").textContent = Number(points); //Updating the score
    boxes = []; //The array is reset
  }

  if (round === 6) {
    gameOver();
  }
}

function gameOver() {
  document.getElementById("attempts").textContent = 0;
  document.getElementsByClassName(".roundNumber").textContent = "Game Over";
  setTimeout(function () {
    alert("Game Over. Do you want to play again?");
    window.location = window.location;
  }, 500);
}
