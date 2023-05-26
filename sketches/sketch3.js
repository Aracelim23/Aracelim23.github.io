

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
   background(255);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  
  //The Ground
  noStroke();
  fill('lightgreen');
  rect(0,400,windowWidth,100);


  //The House
  fill('pink');
  stroke('black');
  rect(50,200,220,200);

  //Windows
  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle
  fill('lightblue');
  triangle(50,200, 100,100,270,200);

  //Tree
  fill('brown')
  rect(400,250,20,200)
  fill('green')
  circle(405,250,150);
  
  
}