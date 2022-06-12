const { stdout } = process;
const { Ball } = require('./ball.js')

const setupScreen = () => {
  stdout.cursorTo(0, 0);
  stdout.clearScreenDown();
}

const main = () => {
  let [maxX, maxY] = stdout.getWindowSize();
  setupScreen();
  const ball = new Ball({ x: 0, y: 0, speedInX: 1, speedInY: 1 })
  const ballBoundary = { maxX: maxX - 2, maxY };

  setInterval(() => {
    ball.erase();
    ball.move(ballBoundary);
    ball.draw();
  }, 40);

};
main();
