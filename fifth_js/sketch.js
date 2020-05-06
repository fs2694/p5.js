let glitchlen = 0;

function setup() {
//  createCanvas(400, 400);
  canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
}

function draw() {
  
  // update screen
  if(frameCount%60==0){
    
    // new background
    background(random(255), random(255), random(255));
    // new colored rect
    fill(random(255), random(255), random(255));
    rect(width/5, height/5, 240, 240);

    // random glitch pixel length
    glitchlen = int(random(4,2400))*4;
    // edit the pixels array
    loadPixels();
    
    let channelshift = int(random(0,4));
 
    for(let i=pixels.length/2; i<pixels.length-glitchlen; i=i+glitchlen){
     
      for(let p=channelshift; p<glitchlen; p+=4){
        pixels[i+p] = pixels[i];
        pixels[i+p+1] = pixels[i+1];
        pixels[i+p+2] = pixels[i+2];
        //pixels[i+p+3] = pixels[i+3];
      }
    }
    updatePixels();
  }
  push();
  fill(255);
  text(glitchlen, width/2, height/2);
  pop();
}