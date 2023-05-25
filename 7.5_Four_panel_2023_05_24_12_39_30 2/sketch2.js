function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300,0,300,300);
  
  if (mouseX > 0 && mouseX <=100) {
    background(255,0,0)
    fill(255, 100, 255);
    ellipse(mouseX, mouseY, 40, 40);
     text("skyla", 40, 40);
    
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
     background(0,0,0)
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
  text("is ", 110, 40);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
     background(0,0,250)
    fill(255, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text("always", 210, 40);  
  }
    else if (mouseX > 200 && mouseX <= 400) {
    background(0,255,0)
    fill(255,153,51);
      ellipse(mouseX,mouseY,40,40);
      text("tired",310,40);
    }
}







