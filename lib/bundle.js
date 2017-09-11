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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(4);
// import HumanPlayer from './human_player';
// import Code from './code';
// import IGNORE_KEYS from './ignore_keys';
// import {CODE} from './code_snippets';

// import Board from './board';



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
      let span = document.createElement("span");
      span.innerHTML = count;
      snippet.appendChild(span);
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
/* 1 */,
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
"} else {",
"  ReactNativeEventTypes = {",
"    customBubblingEventTypes: emptyObject,",
"    customDirectEventTypes: emptyObject,",
"  };",
"}"].join("\n");
/* harmony export (immutable) */ __webpack_exports__["a"] = CODE;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const IGNORE_KEYS =
["Shift",
"ArrowUp",
"ArrowDown",
"Escape",
"ArrowRight",
"ArrowLeft",
"Alt",
"Meta",
"Control",
"CapsLock",
"Tab",
"Dead"];

/* harmony default export */ __webpack_exports__["a"] = (IGNORE_KEYS);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_snippets__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ignore_keys__ = __webpack_require__(3);

// import HumanPlayer from './human_player';
// import Board from './board';


class Game {
  constructor(canvas, snippet) {
    this.canvas = canvas;
    this.snippet = snippet;
  }

  displayCode() {
    __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].split('').forEach( char => {
      let span = document.createElement("span");
      span.innerHTML = char;
      this.snippet.appendChild(span);
    });
  }

  start() {
    const ctx = this.canvas.getContext('2d');
    const car = document.getElementById('audi');
    let [posX, posY] = [0, 510];
    let [target, numErrors, increment] = [0, 0, 500 / __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length];
    ctx.drawImage(car, posX, posY, car.width/4, car.height/4);
    this.displayCode();
    const spans = this.snippet.getElementsByTagName('span');
    spans[target].setAttribute('class', 'highlight');
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Dead") e.preventDefault();
      if (__WEBPACK_IMPORTED_MODULE_1__ignore_keys__["a" /* default */].includes(e.key)) return;
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map