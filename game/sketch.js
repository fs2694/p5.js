var lastAddTime = 0;
let fires = [];
let ghosts = [];
var girl;
var ghost;
var fire;
var gameScreen = 1;
var cld = 0; //Define a variable to determine whether the girl collided with the obstacle. A value of 0 means no collision.

function setup() {
    
    canvas = createCanvas(800,400);
    canvas.parent('sketch-div');
    
    imgGirl = loadImage("");
    girl = new Girl();
    fire = new Fire();
    ghost = new Ghost();
}

function addObstacle() {
    var interval = random(800, 2000); //The time interval between the two fires is a random number from 800 to 4000 
    if (millis() - lastAddTime > interval) { //If the current time differs from the last fire class' time was more than one time interval, a new fire class will be added.

        if (int(interval) % 2 == 0) { //If the time interval can be divided by 2
            fires.push(new Fire());
        } else {
            ghosts.push(new Ghost());
        }
        lastAddTime = millis(); //Set the last time the obstacle was added to the current time
    }
}

function draw() {
    if (gameScreen == 1) {
        gamePlayScreen();
    } else if (gameScreen == 2) {
        gameOverScreen();
    }
}

function gamePlayScreen() {
    background(236, 240, 241);
    addObstacle();
    girl.move();
    girl.show();
    ghost.move();
    ghost.show();
    for (let c of fires) {
        c.move();
        c.show();
        if (girl.hits(c)) {
            cld = 1;
            textAlign(CENTER);
            textSize(70);
            gameOver();
        }
    }

    for (let b of ghosts) { 
        b.move();
        b.show();

        if (girl.hits(b)) {
            cld = 1;
            textAlign(CENTER);
            textSize(70);
            gameOver();
        }
    }
}

function startGame() {
    gameScreen = 1;
}

function gameOverScreen() {
    background(23, 24, 24, 10);
    textAlign(CENTER);
    fill(255, 227, 132);
    textSize(100);
    text("Game Over", width / 2, height / 2);
    textSize(150);
    fill(92, 167, 182);
    rectMode(CENTER);
    noStroke();
    rect(width / 2, height - 100, 200, 60, 5);
    fill(236, 240, 241);
    textSize(30);
    text("Again", width / 2, height - 90);
}

function gameOver() {
    gameScreen = 2;
}

function keyPressed() {
    console.log(key)
    if (key == ' ' || key == 'J') {
        girl.jump();
    }
}

function mouseClicked() {
    if (gameScreen == 2) {
        restart();
    }

}

function restart() {
    gameScreen = 1;
    lastAddTime = 0;
    girls = [];
    fires = [];
    cld = 0;
}