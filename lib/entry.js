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

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('race-track');
  const ctx = canvas.getContext('2d');
  const car = document.getElementById('audi');
  let posX = 0;
  let posY = 500;
  let target = 0;
  let numErrors = 0;
  const snippet = document.getElementById('snippet');
  CODE.split('').forEach( char => {
    let span = document.createElement("span");
    span.innerHTML = char;
    snippet.appendChild(span);
  });
  const spans = snippet.getElementsByTagName('span');
  spans[target].setAttribute('class', 'highlight');
  car.onload = function () {
    ctx.drawImage(car, posX, posY, car.width/3, car.height/3);
  };
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (IGNORE_KEYS.includes(e.key)) return;
    if (numErrors === 0 && (e.key === spans[target].innerHTML) ||
        (e.key === 'Enter' && spans[target].innerHTML.length > 1)) {
      if (spans[target].innerHTML.length > 1) {
        spans[target].innerHTML = '\n';
        spans[target].removeAttribute('class');
        while (spans[target + 1].innerHTML === ' ') target += 1;
      }
      spans[target].removeAttribute('class');
      target += 1;
      if (spans[target].innerHTML === "\n") {
        spans[target].innerHTML = ' &#x23ce \n';
      }
      spans[target].setAttribute('class', 'highlight');
      posX += 5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(car, posX, posY, car.width/3, car.height/3);
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
});
