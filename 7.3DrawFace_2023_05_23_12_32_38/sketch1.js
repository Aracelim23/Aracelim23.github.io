function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Draw Head 
  fill('lavender')
  ellipse(200,200,300,300)
  
  //Add Eyes 
  strokeWeight(1)
  fill(255,235,205)
  circle(130,130,40)
  circle(251,128,40)
  
  //Add nose 
  strokeWeight(1)
  fill(255,235,205)
  triangle(194,180,178,208,210,208)
  
  //Add mouth 
  noFill(1);
  strokeWeight(3);
  arc(200,230,80,50,0,PI)
  
  //Show Mouse coordinates 
  textSize(20)
  strokeWeight(1)
  fill(0,0,0)
  text('Mouse X:   '+mouseX,0,20)
  text('Mouse Y:   '+mouseY,0,40)
  
  
}