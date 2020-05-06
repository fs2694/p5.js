var myCircle={
  x:200,
  y:200,
  diameter:100
};
  
var spot = {
  x: 0,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0,
  t: 100
};

function setup() {
  canvas = createCanvas(400, 400);
  background(0);
  canvas.parent('sketch-div');
  frameRate(10)
}

function draw() {
  col.r = random(100, 255);
  col.g = map(mouseX,0,400,0,225);
  col.b = random(100, 190);
  col.t = map(mouseY,0,400,0,100);
  //background(col.r,col.g,col.b);
  
 //draw random transparent spots  
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, col.t)
  ellipse(spot.x, spot.y, 17, 17);
  
  // //draw a big circle
  // fill(250,0,0);
  // ellipse(myCircle.x, myCircle.y, myCircle.diameter, myCircle.diameter);
  // // circle.y=circle.y+1；
}