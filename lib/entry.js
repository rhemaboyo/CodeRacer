import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('race-track');
  const start = document.getElementById('start');
  const snippet = document.getElementById('snippet');
  let count = 5;
  let timer = () => {
    snippet.removeChild(snippet.firstElementChild);
    if (count === 0) {
      clearInterval(interval);
      const game = new Game(canvas, snippet);
      game.start();
    } else {
      let p = document.createElement("p");
      p.className = 'countdown';
      p.innerHTML = count;
      snippet.appendChild(p);
      count --;
    }
  };
  let interval;
  start.onclick = () => {
    interval = setInterval(timer, 1000);
  };
  // const game = new Game(canvas);
  // game.start();
  // const ctx = canvas.getContext('2d');
  // const car = document.getElementById('audi');
  // const player1 = new HumanPlayer(car);
  // let posX = 0;
  // let posY = 500;
  // let target = 0;
  // let numErrors = 0;
  // CODE.split('').forEach( char => {
  //   let span = document.createElement("span");
  //   span.innerHTML = char;
  //   snippet.appendChild(span);
  // });
  // const spans = snippet.getElementsByTagName('span');
  // spans[target].setAttribute('class', 'highlight');
  // car.onload = function () {
  //   ctx.drawImage(car, posX, posY, car.width/4, car.height/4);
  // };
  // document.addEventListener("keydown", (e) => {
  //   e.preventDefault();
  //   if (IGNORE_KEYS.includes(e.key)) return;
  //   if (numErrors === 0 && (e.key === spans[target].innerHTML) ||
  //       (e.key === 'Enter' && spans[target].innerHTML.length > 1)) {
  //     if (spans[target].innerHTML.length > 1) {
  //       spans[target].innerHTML = '\n';
  //       spans[target].removeAttribute('class');
  //       while (spans[target + 1].innerHTML === ' ') target += 1;
  //     }
  //     spans[target].removeAttribute('class');
  //     target += 1;
  //     if (spans[target].innerHTML === "\n") {
  //       spans[target].innerHTML = ' &#x23ce \n';
  //     }
  //     spans[target].setAttribute('class', 'highlight');
  //     posX += 5;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.drawImage(car, posX, posY, car.width/4, car.height/4);
  //   } else if (e.key === 'Backspace') {
  //     if (numErrors > 0) {
  //       numErrors -= 1;
  //       spans[target + numErrors].removeAttribute('class');
  //     } else {
  //       spans[target + numErrors].removeAttribute('class');
  //       if (target > 0) target -= 1;
  //     }
  //     if (numErrors === 0) {
  //       spans[target + numErrors].setAttribute('class', 'highlight');
  //     }
  //   } else {
  //     spans[target + numErrors].setAttribute('class', 'badlight');
  //     numErrors += 1;
  //   }
  // });
});
