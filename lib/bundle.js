/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('race-track');
  const start = document.getElementById('start');
  const snippet = document.getElementById('snippet');
  let count = 5;
  let timer = () => {
    snippet.removeChild(snippet.firstElementChild);
    if (count === 0) {
      clearInterval(interval);
      const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas, snippet);
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_snippets__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ignore_keys__ = __webpack_require__(3);



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
    this.typeableKeys = __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length;
    this.numErrors = 0;
    this.spans = null;
    this.startTime = null;
    this.increment = 500 / __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length;
    this.car = document.getElementById('audi');
    this.comp = document.getElementById('viper');
    this.handleRace = this.handleRace.bind(this);
    this.handleCursor = this.handleCursor.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  displayCode() {
    __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].split('').forEach( char => {
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
    let words = __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length / 5;
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
        Math.abs((this.totalErrors / __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length) * 100 - 100)
          .toFixed(2)}%`
    ].join('\n');
    this.snippet.appendChild(span);
  }

  handleRace(e) {
    if (this.target === this.spans.length - 1) this.endGame(new Date());
    if (e.key !== "Dead") e.preventDefault();
    if (__WEBPACK_IMPORTED_MODULE_1__ignore_keys__["a" /* default */][e.key]) return;
    this.typedKeys += 1;
    if (this.numErrors === 0 && (e.key === this.spans[this.target].innerHTML) ||
        (e.key === 'Enter' && this.spans[this.target].innerHTML.length > 1)) {
      this.handleCursor();
      this.posY -= this.increment;
      this.moveCar();
    } else if (e.key === 'Backspace') {
      this.handleBackSpace();
    } else {
      this.handleErrors();
    }
  }

  moveCar() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.car, this.posX, this.posY,
                       this.car.width/4, this.car.height/4);
    this.ctx.drawImage(this.comp, this.compX, this.compY,
                       this.comp.width/4, this.comp.height/4);
  }

  handleCursor() {
    if (this.spans[this.target].innerHTML.length > 1) {
      this.spans[this.target].innerHTML = '\n';
      this.spans[this.target].removeAttribute('class');
      while (this.spans[this.target + 1].innerHTML === ' ') {
        this.typeableKeys -= 1;
        this.posY -= this.increment;
        this.target += 1;
      }
    }
    this.spans[this.target].removeAttribute('class');
    this.target += 1;
    if (this.spans[this.target].innerHTML === "\n") {
      this.spans[this.target].innerHTML = ' &#x23ce \n';
    }
    this.spans[this.target].setAttribute('class', 'highlight');
  }

  handleBackSpace() {
    if (this.numErrors > 0) {
      this.numErrors -= 1;
      this.spans[this.target + this.numErrors].removeAttribute('class');
    } else {
      this.spans[this.target + this.numErrors].removeAttribute('class');
      if (this.target > 0) this.target -= 1;
    }
    if (this.numErrors === 0) {
      this.totalErrors += 1;
      this.spans[this.target + this.numErrors]
        .setAttribute('class', 'highlight');
    }
  }

  handleErrors() {
    this.spans[this.target + this.numErrors].setAttribute('class', 'badlight');
    this.numErrors += 1;
  }

  compStart() {
    const wpm = 20 + Math.round(Math.random() * 60);
    const run = () => {
      if (this.compY - this.increment <= 15) {
        clearInterval(interval);
      }
      this.compY -= this.increment;
      this.moveCar();
    };
    const interval = setInterval(run, 12000 / wpm);
  }

  start() {
    this.ctx.drawImage(this.car, this.posX, this.posY,
                       this.car.width/4, this.car.height/4);
    this.ctx.drawImage(this.comp, this.compX, this.compY,
                       this.comp.width/4, this.comp.height/4);
    this.displayCode();
    this.spans = this.snippet.getElementsByTagName('span');
    this.spans[this.target].setAttribute('class', 'highlight');
    this.startTime = new Date();
    this.compStart();
    document.addEventListener("keydown", this.handleRace);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CODE = ["let ReactNativeEventTypes;",
"if (Platform.OS === 'ios') {",
"  ReactNativeEventTypes = {",
"    customBubblingEventTypes: IOS_BUBBLING_EVENT_TYPES,",
"    customDirectEventTypes: IOS_DIRECT_EVENT_TYPES,",
"  };",
"} else if (Platform.OS === 'android') {",
"  ReactNativeEventTypes = {",
"    customBubblingEventTypes: ANDROID_BUBBLING_EVENT_TYPES,",
"    customDirectEventTypes: ANDROID_DIRECT_EVENT_TYPES,",
"  };",
"}"].join("\n");
/* harmony export (immutable) */ __webpack_exports__["a"] = CODE;

// export const CODE = ["let ReactNativeEventTypes;",
// "if (Platform.OS === 'ios') {",
// "  ReactNativeEventTypes = {",
// "    customBubblingEventTypes: IOS_BUBBLING_EVENT_TYPES,",
// "    customDirectEventTypes: IOS_DIRECT_EVENT_TYPES,",
// "  };",
// "} else if (Platform.OS === 'android') {",
// "  ReactNativeEventTypes = {",
// "    customBubblingEventTypes: ANDROID_BUBBLING_EVENT_TYPES,",
// "    customDirectEventTypes: ANDROID_DIRECT_EVENT_TYPES,",
// "  };",
// "} else {",
// "  ReactNativeEventTypes = {",
// "    customBubblingEventTypes: emptyObject,",
// "    customDirectEventTypes: emptyObject,",
// "  };",
// "}"].join("\n");


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const IGNORE_KEYS =
{Shift: true,
ArrowUp: true,
ArrowDown: true,
Escape: true,
ArrowRight: true,
ArrowLeft: true,
Alt: true,
Meta: true,
Control: true,
CapsLock: true,
Tab: true,
Dead: true};

/* harmony default export */ __webpack_exports__["a"] = (IGNORE_KEYS);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map