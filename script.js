let playerSelection;
let computerSelection;
let pGiftResult;
let cGiftResult;

function playerGift() {
  pGift = Math.floor(Math.random() * 10);
  switch (pGift) {
    case 0:
      pGiftResult = "You get back massage";
      break;
    case 1:
      pGiftResult = "You get Rafaelo";
      break;
    case 2:
      pGiftResult = "You get hugs";
      break;
    case 3:
      pGiftResult = "You get dinner made by me";
      break;
    case 4:
      pGiftResult = "You get cartoon time between my arms";
      break;
    case 5:
      pGiftResult = "You get movie night with pizza";
      break;
    case 6:
      pGiftResult = "You get date night + walk";
      break;
    case 7:
      pGiftResult = "You get flowers";
      break;
    case 8:
      pGiftResult = "You get ice cream";
      break;
    case 9:
      pGiftResult = "You get cuddling and spooning";
      break;
    case 10:
      pGiftResult = "You get me :P";
      break;
    default:
      pGiftResult = "You get nothing muahahaha :P";
      break;
  }
}
function computerGift() {
  cGift = Math.floor(Math.random() * 10);
  switch (cGift) {
    case 0:
      cGiftResult = "I get back massage";
      break;
    case 1:
      cGiftResult = "I get Rafaelo";
      break;
    case 2:
      cGiftResult = "I get hugs";
      break;
    case 3:
      cGiftResult = "I get dinner made by you";
      break;
    case 4:
      cGiftResult = "I get cartoon time between your arms";
      break;
    case 5:
      cGiftResult = "I get happy time";
      break;
    case 6:
      cGiftResult = "I get date night + happy time";
      break;
    case 7:
      cGiftResult = "I get to see boobiez";
      break;
    case 8:
      cGiftResult = "I get ice cream while you just watch";
      break;
    case 9:
      cGiftResult = "I get cuddling and spooning";
      break;
    case 10:
      cGiftResult = "I get you naked :P";
      break;
    default:
      cGiftResult = "I get hugs and kisses";
      break;
  }
}

function playerResult() {
  document.querySelector(".check").addEventListener("click", function () {
    playerSelection = document.querySelector(".guess").value;
    console.log(playerSelection);
  });
}

function computerResult() {
  computerSelection = Math.floor(Math.random() * 10);
  document.querySelector(".computer-selection").textContent = computerSelection;
  console.log(computerSelection);
}

function gameValidation() {
  document.querySelector(".check").addEventListener("click", function () {
    computerResult();
  });
}

function checker() {
  document.querySelector(".check").addEventListener("click", function () {
    if (playerSelection == computerSelection) {
      playerGift();
      document.querySelector(".result-text").textContent = pGiftResult;
    } else if (playerSelection != computerSelection) {
      computerGift();
      document.querySelector(".result-text").textContent = cGiftResult;
    }
  });
}

function play() {
  playerResult();
  document.querySelector(".check").addEventListener("click", function () {
    if (playerSelection >= 0 && playerSelection <= 10) {
      gameValidation();
      checker();
    } else {
      alert("Rule broken, only betwen 0 and 10 it works");
    }
  });
}

play();

//
//
//
//
//! Find that annoing but for char rep. fix to reload webpage to avoid overloading
