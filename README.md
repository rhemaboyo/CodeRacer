# CodeRacer #

[CodeRacer live](http://rhemaboyo.com/CodeRacer/)

All coders are typers, and many new developers struggle with typing some of the underutilized keys, in the everyday world, that are common to programming. That's why I decided to make CodeRacer. It's a fun way to teach yourself touch typing, while racing against other players.

The cursor follows along with the keystroke of the typer and turns red to alert the user that they have made a typo. Unlike many other touch typing services CodeRacer requires you to backspace in order to fix your errors and counts those unproductive keystrokes against the user. This allows typer to optimize for accuracy and not just speed.

At the end of the race the user receives statistics on not just words per minute, but also unproductive keystroke overhead and accuracy.

![Here is CodeRacer in actions!](images/coderacer.gif)

## Technical Implementation ##

CodeRacer is built in JavaScript using HTML5's Canvas API for animation.  

The progress of the race is handled through the JavaScript DOM EventListener for keypresses.

Every time a valid key is pressed the position of the image in canvas is redrawn and the cursor progresses depending on whether an error has been made or not.

```JavaScript
//game.js
document.addEventListener("keydown", this.handleRace);

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
```

The Computer Player's speed is set randomly at the start of the race, and the position of the computer player is set asynchronously to match the computer's word per minute speed.

```JavaScript
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
```

## Future Directions ##

In the future I hope to implement a backend database for the user to track their improvement in speed and accuracy as they progress on the site.

I also hope to apply multiplayer functionality, where users can invite their friends to join a race via a link, in the style of Typeracer.com
