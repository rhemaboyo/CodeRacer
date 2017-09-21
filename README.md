# CodeRacer #

[CodeRacer live](https://rhemaboyo.com/CodeRacer/)

All coders are typers, and many new developers struggle with typing some of the underutilized keys, in the everyday world, that are common to programming. That's why I decided to make CodeRacer. It's a fun way to teach yourself touch typing, while racing against other players.

The cursor follows along with the keystroke of the typer and turns red to alert the user that they have made a typo. Unlike many other touch typing services CodeRacer requires you to backspace in order to fix your errors and counts those unproductive keystrokes against the user. This allows typer to optimize for accuracy and not just speed.

At the end of the race the user receives statistics on not just words per minute, but also unproductive keystroke overhead and accuracy.

![Here is CodeRacer in actions!](images/coderacer.gif)

## Technical Implementation ##

CodeRacer is built in JavaScript using HTML5's Canvas API for animation.  

The progress of the race is handled through the JavaScript DOM EventListener for keypresses.

```JavaScript
document.addEventListener("keydown", this.handleRace);
```

Every time a valid key is pressed the position of the image in canvas is redrawn and the cursor progresses depending on whether an error has been made or not.

The Computer Player's speed is set randomly at the start of the race, and the position of the computer player is set asynchronously to match the computer's word per minute speed.

```JavaScript
compStart() {
  const wpm = 20 + Math.round(Math.random() * 60);
  const run = () => {
    if (this.compY - this.increment <= 15) {
      clearInterval(interval);
    }
    this.compY -= this.increment;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.comp, this.compX, this.compY,
                       this.comp.width/4, this.comp.height/4);
    this.ctx.drawImage(this.car, this.posX, this.posY,
                       this.car.width/4, this.car.height/4);
  };
  const interval = setInterval(run, 12000 / wpm);
}
```

## Future Directions ##

In the future I hope to implement a backend database for the user to track their improvement in speed and accuracy as they progress on the site.

I also hope to apply multiplayer functionality, where users can invite their friends to join a race via a link, in the style of Typeracer.com
