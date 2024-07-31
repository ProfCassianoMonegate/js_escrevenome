function setup() {
    createCanvas(800, 400);
    background("blue")
  }
  
  function draw() {
  
    if(mouseIsPressed) {
  rect(mouseX,mouseY, 40, 40)
  stroke();
  fill("yellow");}
  }