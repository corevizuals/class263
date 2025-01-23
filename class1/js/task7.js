"use strict";

let circleSize = 50; // size of the circles and the squares
let cols, rows; 
let shapeIsCircle = true; 
let randomColor; 

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Calculate columns and rows based on circle size
    cols = floor(width / circleSize);
    rows = floor(height / circleSize);

    randomColor = color(random(255), random(255), random(255));
}

function draw() {
    background(220);

    // Nested for loop to draw the grid
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let posX = x * circleSize + circleSize / 2;
            let posY = y * circleSize + circleSize / 2; 

            fill(randomColor); 

            // Bonus: Even rows are circles, odd rows are squares
            if (y % 2 === 0) {
                if (shapeIsCircle) {
                    ellipse(posX, posY, circleSize, circleSize);
                } else {
                    rect(posX - circleSize / 2, posY - circleSize / 2, circleSize, circleSize);
                }
            } else {
                if (shapeIsCircle) {
                    rect(posX - circleSize / 2, posY - circleSize / 2, circleSize, circleSize);
                } else {
                    ellipse(posX, posY, circleSize, circleSize);
                }
            }
        }
    }
}

// When the user presses the space bar, change the random color
function keyPressed() {
    if (key === ' ') {
        randomColor = color(random(255), random(255), random(255)); 
    }
}

// When the user clicks, toggle between circles and squares
function mousePressed() {
    shapeIsCircle = !shapeIsCircle; 
}
