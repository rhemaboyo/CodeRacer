class HumanPlayer {
  constructor(car) {
    this.car = car;
    this.x = 0;
    this.y = 500;
    this.target = 0;
    this.this.numErrors = 0;
  }

  render() {
    // this.car.onload = function () {
    //   ctx.drawImage(car, this.x, this.y, car.width/4, car.height/4);
    // };
  }
}

export default HumanPlayer;
