import {CODE} from './code_snippets';
// import HumanPlayer from './human_player';
// import Board from './board';
import IGNORE_KEYS from './ignore_keys';

class Game {
  constructor(canvas, snippet) {
    this.canvas = canvas;
    this.snippet = snippet;
  }

  displayCode() {
    CODE.split('').forEach( char => {
      let span = document.createElement("span");
      span.innerHTML = char;
      this.snippet.appendChild(span);
    });
  }

  start() {
    const ctx = this.canvas.getContext('2d');
    const car = document.getElementById('audi');
    let [posX, posY] = [0, 510];
    let [target, numErrors, increment] = [0, 0, 500 / CODE.length];
    ctx.drawImage(car, posX, posY, car.width/4, car.height/4);
    this.displayCode();
    const spans = this.snippet.getElementsByTagName('span');
    spans[target].setAttribute('class', 'highlight');
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Dead") e.preventDefault();
      if (IGNORE_KEYS.includes(e.key)) return;
      if (numErrors === 0 && (e.key === spans[target].innerHTML) ||
          (e.key === 'Enter' && spans[target].innerHTML.length > 1)) {
        if (spans[target].innerHTML.length > 1) {
          spans[target].innerHTML = '\n';
          spans[target].removeAttribute('class');
          while (spans[target + 1].innerHTML === ' ') {
            posY -= increment;
            target += 1;
          }
        }
        spans[target].removeAttribute('class');
        target += 1;
        if (spans[target].innerHTML === "\n") {
          spans[target].innerHTML = ' &#x23ce \n';
        }
        spans[target].setAttribute('class', 'highlight');
        posY -= increment;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(car, posX, posY, car.width/4, car.height/4);
      } else if (e.key === 'Backspace') {
        if (numErrors > 0) {
          numErrors -= 1;
          spans[target + numErrors].removeAttribute('class');
        } else {
          spans[target + numErrors].removeAttribute('class');
          if (target > 0) target -= 1;
        }
        if (numErrors === 0) {
          spans[target + numErrors].setAttribute('class', 'highlight');
        }
      } else {
        spans[target + numErrors].setAttribute('class', 'badlight');
        numErrors += 1;
      }
    });
  }
}

export default Game;
