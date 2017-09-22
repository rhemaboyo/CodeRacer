import {CODE} from './code_snippets';
import IGNORE_KEYS from './ignore_keys';

class Game {
  constructor(canvas, snippet) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.snippet = snippet;
    this.posX = 0;
    this.posY = 510;
    this.compX = 890;
    this.compY = 510;
    this.target = 0;
    this.typedKeys = 0;
    this.totalErrors = 0;
    this.typedKeys = 0;
    this.typeableKeys = CODE.length;
    this.numErrors = 0;
    this.chars = null;
    this.startTime = null;
    this.increment = 500 / CODE.length;
    this.car = document.getElementById('audi');
    this.comp = document.getElementById('viper');
    this.handleRace = this.handleRace.bind(this);
    this.advanceCursor = this.advanceCursor.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.render = this.render.bind(this);
  }

  displayCode() {
    CODE.split('').forEach( char => {
      let span = document.createElement("span");
      span.innerHTML = char;
      this.snippet.appendChild(span);
    });
  }

  endGame(endTime) {
    this.typedKeys += 1;
    document.removeEventListener("keydown", this.handleRace);
    while (this.snippet.hasChildNodes()) {
      this.snippet.removeChild(this.snippet.firstElementChild);
    }
    let words = CODE.length / 5;
    let minutes = (endTime - this.startTime) / 1000 / 60;
    let span = document.createElement("span");
    span.innerHTML = [
      `Typeable Keys: ${this.typeableKeys}`,
      `Typed Keys (including backspaces): ${this.typedKeys}`,
      `Unproductive Keystroke Overhead ${
        Math.round(
          ((this.typedKeys - this.typeableKeys) / this.typeableKeys) * 100
        )}%`,
      `WPM: ${Math.round(words / minutes)}`,
      `Accuracy (initial errors only): ${
        Math.abs((this.totalErrors / CODE.length) * 100 - 100)
          .toFixed(2)}%`
    ].join('\n');
    this.snippet.appendChild(span);
  }

  handleRace(e) {
    if (this.target === this.chars.length - 1) this.endGame(new Date());
    if (e.key !== "Dead") e.preventDefault();
    if (IGNORE_KEYS[e.key]) return;
    this.typedKeys += 1;
    if (this.numErrors === 0 && (e.key === this.chars[this.target].innerHTML) ||
        (e.key === 'Enter' && this.chars[this.target].innerHTML.length > 1)) {
      this.advanceCursor();
      this.posY -= this.increment;
      this.render();
    } else if (e.key === 'Backspace') {
      this.handleBackSpace();
    } else {
      this.handleErrors();
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.car, this.posX, this.posY,
                       this.car.width/4, this.car.height/4);
    this.ctx.drawImage(this.comp, this.compX, this.compY,
                       this.comp.width/4, this.comp.height/4);
  }

  advanceCursor() {
    if (this.chars[this.target].innerHTML.length > 1) {
      this.chars[this.target].innerHTML = '\n';
      this.chars[this.target].removeAttribute('class');
      while (this.chars[this.target + 1].innerHTML === ' ') {
        this.typeableKeys -= 1;
        this.posY -= this.increment;
        this.target += 1;
      }
    }
    this.chars[this.target].removeAttribute('class');
    this.target += 1;
    if (this.chars[this.target].innerHTML === "\n") {
      this.chars[this.target].innerHTML = ' &#x23ce \n';
    }
    this.chars[this.target].setAttribute('class', 'highlight');
  }

  handleBackSpace() {
    if (this.numErrors > 0) {
      this.numErrors -= 1;
      this.chars[this.target + this.numErrors].removeAttribute('class');
    } else {
      this.chars[this.target + this.numErrors].removeAttribute('class');
      if (this.target > 0) this.target -= 1;
    }
    if (this.numErrors === 0) {
      this.totalErrors += 1;
      this.chars[this.target + this.numErrors]
        .setAttribute('class', 'highlight');
    }
  }

  handleErrors() {
    this.chars[this.target + this.numErrors].setAttribute('class', 'badlight');
    this.numErrors += 1;
  }

  compStart() {
    const wpm = 20 + Math.round(Math.random() * 60);
    const run = () => {
      if (this.compY - this.increment <= 15) {
        clearInterval(interval);
      }
      this.compY -= this.increment;
      this.render();
    };
    const interval = setInterval(run, 12000 / wpm);
  }

  start() {
    this.ctx.drawImage(this.car, this.posX, this.posY,
                       this.car.width/4, this.car.height/4);
    this.ctx.drawImage(this.comp, this.compX, this.compY,
                       this.comp.width/4, this.comp.height/4);
    this.displayCode();
    this.chars = this.snippet.getElementsByTagName('span');
    this.chars[this.target].setAttribute('class', 'highlight');
    this.startTime = new Date();
    this.compStart();
    document.addEventListener("keydown", this.handleRace);
  }
}

export default Game;
