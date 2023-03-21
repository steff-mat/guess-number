const player = document.getElementById('player');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');
const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const giftText = [
  'get Rafaelo',
  'get hugs',
  'get breakfast in bed',
  'get back massage',
  'get movie night with pizza',
  'get date night',
  'get to choose what we do tonight',
  'get ice cream',
  'get cuddling and spooning',
  'get a gift',
];
function gift() {
  return giftText[Math.trunc(Math.random() * 10)];
}
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
    playerValue = player.innerText;
    cpuValue = computer.innerText;
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
    resultText = `You don't ${gift()}`;
  } else if (playerValue > cpuValue) {
    winner.style.backgroundColor = 'darkgreen';
    resultText = `You ${gift()}`;
  } else if (playerValue == cpuValue) {
    winner.style.backgroundColor = 'black';
    resultText = 'Nobody gets anything';
  }
}
