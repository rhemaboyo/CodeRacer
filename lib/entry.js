import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('race-track');
  const start = document.getElementById('start');
  const restart = document.getElementById('restart');
  const snippet = document.getElementById('snippet');
  let count = 5;
  let timer = () => {
    while(snippet.firstElementChild) {
      snippet.removeChild(snippet.firstElementChild);
    }
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

  restart.onclick = () => {
    count = 5;
    let container = document.getElementById("snippet-container");
    snippet.removeChild(snippet.firstElementChild);
    restart.setAttribute('class', 'hidden');
    container.appendChild(restart);
    interval = setInterval(timer, 1000);
  };
});
