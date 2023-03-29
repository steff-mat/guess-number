const player = document.getElementById('player');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');
const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

let playerValue = '';
let cpuValue = '';
let resultText;

const cpu = function () {
  computer.innerText = Math.trunc(Math.random() * 10 + 1);
};

buttons.forEach((x) => {
  const button = document.getElementById(x);
  button.addEventListener('click', () => {
    cpu();
    player.innerText = button.innerText;
    playerValue = parseInt(player.innerText);
    cpuValue = parseInt(computer.innerText);
    switcher();
    winner.classList.remove('hidden');
    winner.innerText = resultText;
    setTimeout(function () {
      winner.style.background = '#051E05';
    }, 500);
  });
});

function switcher() {
  if (playerValue < cpuValue) {
    winner.style.backgroundColor = 'darkred';
    resultText = `Don't go too deep!`;
  } else if (playerValue > cpuValue) {
    winner.style.backgroundColor = 'darkred';
    resultText = `Shooting for the moon, huh?`;
  } else if (playerValue == cpuValue) {
    winner.style.backgroundColor = 'darkgreen';
    resultText = 'Well... Feeling lucky today, huh?';
  }
}
