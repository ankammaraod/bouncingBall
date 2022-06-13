const { stdout } = process;
const PLATFORM = '⬜️⬜️⬜️⬜️⬜️';

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(to) {
    this.x += to;
  }
  draw() {
    stdout.cursorTo(this.x, this.y);
    stdout.write(PLATFORM);
  }
  erase() {
    stdout.cursorTo(this.x, this.y)
    stdout.write('  '.repeat(PLATFORM.length));
  }
  getPosition() {
    return { x: this.x, y: this.y, length: PLATFORM.length }
  }


}

module.exports = { Platform };