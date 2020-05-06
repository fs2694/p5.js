let x = 0;
let y = 0;

function setup() {
//  createCanvas(400, 400);
  canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
  background(200, 200, 100);
  stroke(255);
  strokeWeight(2);
}

function draw() {

	// 随机概率 向左向右
  if (random(1) > 0.5) {
    line(x, y, x + 20, y + 20);
  } else {
    line(x, y + 20, x + 20, y);
  }

  x += 20;
  
  if (x > width) {
    x = 0;
    y += 20;
  }

  if (y > height) {
    background(200, 200, 100);
    x = 0;
    y = 0;
  }
}