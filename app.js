let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//

context.strokeStyle = "black";
context.lineWidth = 0.3;
const q = 10;
for (let i = 0; i < height / q + 1; i++) {
  context.beginPath();
  context.moveTo(i * q, 0);
  context.lineTo(i * q, height);
  context.stroke();
}
for (let i = 0; i < width / q + 1; i++) {
  context.beginPath();
  context.moveTo(0, i * q);
  context.lineTo(width, i * q);
  context.stroke();
}

//

let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

let score = 0;

let drawBorder = function () {
  context.fillStyle = "gray";
  context.fillRect(0, 0, width, blockSize);
  context.fillRect(0, height - blockSize, width, blockSize);
  context.fillRect(0, 0, blockSize, height);
  context.fillRect(width - blockSize, 0, blockSize, height);
};

let drawScore = function () {
  context.textBaseline = "middle";
  context.fillStyle = "Black";
  context.textAlign = "left";
  context.font = "20px Arial";
  context.fillText(`Счет:  ${score}`, blockSize, blockSize);
};

let gameOver = function () {
  clearInterval(intervalId);
  context.font = "60px Courier";
  context.fillStyle = "Black";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(`Конец игры`, width / 2, height / 2);
};
