const { stdout, stdin } = process;
const { Ball } = require('./ball.js');
const { Platform } = require('./platform.js');
const HIDDEN_CURSOR = '\x1B[?25l';
const { EventEmitter } = require('events');

const setupScreen = () => {
  stdout.cursorTo(0, 0);
  stdout.write(HIDDEN_CURSOR);
  stdout.clearScreenDown();
}

const main = () => {
  let [maxX, maxY] = stdout.getWindowSize();
  setupScreen();
  const ball = new Ball({ x: 0, y: 0, speedInX: 1, speedInY: 1 })
  const ballBoundary = { maxX: maxX - 10, maxY };

  const platform = new Platform(Math.floor(maxX / 2), maxY);
  platform.draw();

  const eventEmitter = new EventEmitter();
  eventEmitter.on('a', () => platform.move(-3));
  eventEmitter.on('d', () => platform.move(3));

  setInterval(() => {
    if (ball.isPlatFormNear(platform.getPosition())) {
      ball.rebound();
    }
    ball.erase();
    ball.move(ballBoundary);
    ball.draw();
  }, 1000 / 16);

  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.on('data', chunk => {
    if (chunk.trim() === 'q') process.exit(3);
    platform.erase();
    eventEmitter.emit(chunk.trim());
    platform.draw();
  })

};

main();
