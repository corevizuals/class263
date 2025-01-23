"use strict";

let rect1Color = { r: 0, g: 0, b: 255 }; 
let rect2Color = { r: 0, g: 100, b: 255 }; 
let rect3Color = { r: 0, g: 200, b: 255 }; 

function setup() {
    noStroke(); 
}

function draw() {

    createCanvas(windowWidth, windowHeight); 
   
    const rectWidth = width / 3;  //positions of the rectangles
    const rectHeight = height;

    // First rectangle
    if (mouseX >= 0 && mouseX < rectWidth) {
        fill(300); 
    } else {
        fill(rect1Color.r, rect1Color.g, rect1Color.b); 
    }
    rect(0, 0, rectWidth, rectHeight);

    // Second rectangle
    if (mouseX >= rectWidth && mouseX < 2 * rectWidth) {
        fill(255); 
    } else {
        fill(rect2Color.r, rect2Color.g, rect2Color.b);
    }
    rect(rectWidth, 0, rectWidth, rectHeight);

    // Third rectangle
    if (mouseX >= 2 * rectWidth && mouseX <= width) {
        fill(255); 
    } else {
        fill(rect3Color.r, rect3Color.g, rect3Color.b); 
    }
    rect(2 * rectWidth, 0, rectWidth, rectHeight);


}