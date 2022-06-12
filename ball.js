const BALL_TEXT = '⚽️';
const { stdout } = process;

class Ball {
  constructor({ x, y, speedInX, speedInY }) {
    this.x = x;
    this.y = y;
    this.speedInX = speedInX;
    this.speedInY = speedInY;
  }
  move({ maxX, maxY }) {
    this.x += this.speedInX;
    this.y += this.speedInY;
    if (this.x >= maxX || this.x < 0) this.speedInX *= -1;
    if (this.y >= maxY || this.y < 0) this.speedInY *= -1;
  }

  erase() {
    stdout.cursorTo(this.x, this.y)
    stdout.write('  '.repeat(BALL_TEXT.length));
  }

  draw() {
    stdout.cursorTo(this.x, this.y);
    stdout.write(BALL_TEXT);
  }

}

module.exports = { Ball }