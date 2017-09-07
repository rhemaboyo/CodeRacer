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

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('race-track');
  const ctx = canvas.getContext('2d');
  const car = document.getElementById('audi');
  let posX = 0;
  let target = 0;
  let posY = 0;
  const snippet = document.getElementById('snippet');
  CODE.split('').forEach( char => {
    let span = document.createElement("span");
    span.innerHTML = char;
    snippet.appendChild(span);
  });
  const spans = snippet.getElementsByTagName('span');
  spans[target].setAttribute('class', 'highlight');
  car.onload = function () {
    ctx.drawImage(car, posX, posY, car.width/2, car.height/2);
  };
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === spans[target].innerHTML ||
        e.key === 'Enter' && spans[target].innerHTML.length > 1) {
      if (spans[target].innerHTML.length > 1) spans[target].innerHTML = '\n';
      spans[target].removeAttribute('class');
      target += 1;
      if (spans[target].innerHTML === "\n") {
        spans[target].innerHTML = ' &#x23ce \n';
      }
      spans[target].setAttribute('class', 'highlight');
      posX += 5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(car, posX, posY, car.width/2, car.height/2);
    }
  });
});
