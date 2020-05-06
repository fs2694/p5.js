var phase, speed, maxRectSize, numRows, numCols, numStrands, colorA, colorB;
var x, y, r, time, hue;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
//  createCanvas(500, 500);
  noStroke();
  
  phase = 0;
  speed = 0.03;
  maxRectSize = 20;
  numRows = 10;
  numCols = 16;
  numStrands = 1;
  
  colorA = color(255);
  colorB = color(226,129,161);
}

function draw() {
  background(82,75,46);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2.5 + row * 10 + 2*sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var RectSize = sizeOffset * maxRectSize;
        
        fill(lerpColor(colorA, colorB, row / numRows));
        rect(x, y, RectSize, RectSize);
      }
    }
  }
      x = random(50, 950);
    y = random(50, 950);
    if (random() > 0.9) {
        r = random(50, 80);
    } else {
        r = random(10, 30);
    }
    var time = millis() % 300;
    var hue = map(time, 0, 30000, 0, 100);

    ellipse(x, y, r, r);
}