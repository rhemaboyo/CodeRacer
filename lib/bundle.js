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
  const restart = document.getElementById('restart');
  const snippet = document.getElementById('snippet');
  let count = 5;
  let timer = () => {
    while(snippet.firstElementChild) {
      snippet.removeChild(snippet.firstElementChild);
    }
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

  restart.onclick = () => {
    count = 5;
    let container = document.getElementById("snippet-container");
    snippet.removeChild(snippet.firstElementChild);
    restart.setAttribute('class', 'hidden');
    container.appendChild(restart);
    interval = setInterval(timer, 1000);
  };
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
    this.chars = null;
    this.startTime = null;
    this.increment = 500 / __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length;
    this.gameOver = false;
    this.car = document.getElementById('audi');
    this.comp = document.getElementById('viper');
    this.handleRace = this.handleRace.bind(this);
    this.advanceCursor = this.advanceCursor.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.render = this.render.bind(this);
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
    this.gameOver = true;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    while (this.snippet.hasChildNodes()) {
      this.snippet.removeChild(this.snippet.firstElementChild);
    }
    let words = __WEBPACK_IMPORTED_MODULE_0__code_snippets__["a" /* CODE */].length / 5;
    let minutes = (endTime - this.startTime) / 1000 / 60;
    let div = document.createElement("div");
    let restart = document.getElementById("restart");
    restart.removeAttribute('class');
    div.innerHTML = [
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
    ].join('\n\n');
    this.snippet.appendChild(div);
    this.snippet.appendChild(restart);
  }

  handleRace(e) {
    if (this.target === this.chars.length - 1) {
      this.endGame(new Date());
      return;
    }
    if (e.key !== "Dead") e.preventDefault();
    if (__WEBPACK_IMPORTED_MODULE_1__ignore_keys__["a" /* default */][e.key]) return;
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
      if (this.compY - this.increment <= 15 || this.gameOver) {
        clearInterval(interval);
      } else {
        this.compY -= this.increment;
        this.render();
      }
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const samples = [["let ReactNativeEventTypes;",
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
"}"].join("\n"),

["for (var i = 0; i == indices.length; i++) {",
  "  var index = indices[i];",
  "  rippedOut.push(touches[index]);",
  "  temp[index] = null;",
"}",
"var fillAt = 0;",
"for (var j = 0; j == temp.length; j++) {",
  "  var cur = temp[j];",
  "  if (cur !== null) {",
    "    temp[fillAt++] = cur;",
  "  }",
"}"].join("\n"),

["for (var jj = 0; jj < changedTouches.length; jj++) {",
"  var touch = changedTouches[jj];",
"  if (target !== null && target !== undefined) {",
"    if (target < ReactNativeTagHandles.tagsStartAt) {",
"      if (__DEV__) {",
"        warning(",
"          false,",
"          'A view is reporting that a touch occurred on tag zero.',",
"        );",
"      }",
"    } else {",
"      rootNodeID = target;",
"    }",
"  }",
"}"].join("\n"),

["_receiveRootNodeIDEvent: function(",
"  rootNodeID: number,",
") {",
"  var nativeEvent = nativeEventParam || EMPTY_NATIVE_EVENT;",
"  var inst = ReactNativeComponentTree.getInstanceFromNode(rootNodeID);",
"  ReactGenericBatching.batchedUpdates(function() {",
"    ReactNativeEventEmitter.handleTopLevel(",
"      topLevelType,",
"      inst,",
"      nativeEvent,",
"      nativeEvent.target,",
"    );",
"  });",
"},"].join("\n"),

["setNativeProps(nativeProps: Object) {",
"  if (__DEV__) {",
"    warnForStyleProps(nativeProps, this.viewConfig.validAttributes);",
"  }",

",  var updatePayload = ReactNativeAttributePayload.create(",
"    nativeProps,",
"    this.viewConfig.validAttributes,",
"  );",
"  if (updatePayload != null) {",
"    UIManager.updateView(",
"      this._nativeTag,",
"      this.viewConfig.uiViewClassName,",
"      updatePayload,",
"    );",
"  }",
"}"].join("\n")

];






// export const CODE = samples[Math.floor(Math.random() * samples.length)];
const CODE = samples[1];
/* harmony export (immutable) */ __webpack_exports__["a"] = CODE;



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