let playerSelection;
let stringPlayerSelection;
let computerSelection;
let pGiftResult;
let cGiftResult;

function playerGift() {
  document.querySelector(".result-box").style.backgroundColor = "lightblue";
    pGift = Math.floor(Math.random() * 10) + 1;
    switch (pGift) {
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
        pGiftResult = "You get back massage";
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
    }
  }
function computerGift() {
  document.querySelector(".result-box").style.backgroundColor = "lightgreen";
    cGift = Math.floor(Math.random() * 10) + 1;
    switch (cGift) {
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
      stringPlayerSelection = document.querySelector(".guess").value;
      playerSelection = Number(stringPlayerSelection);
      validator();
    });
  }

function computerResult() {
    computerSelection = Math.floor(Math.random() * 10) + 1;
    document.querySelector(".computer-selection").textContent = computerSelection;
    console.log(computerSelection);
    checker();
  }

function checker() {
  if (playerSelection == computerSelection) {
    playerGift();
    document.querySelector(".result-text").textContent = pGiftResult;
  } else if (playerSelection != computerSelection) {
    computerGift();
    document.querySelector(".result-text").textContent = cGiftResult;
  }
  }

  function validator() {
    if(playerSelection < 1 || playerSelection > 10) {
      alert("U donkey, refresh browser and enter number");
    } else {
      computerResult();
    }
  }

function game() {
    playerResult();
    
}

document.querySelector(".start-game").addEventListener("click", function () {
    game();
    document.getElementById("start").disabled = true;
})
