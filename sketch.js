var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(500, 200, 50, 20);
  fixedRect = createSprite(400, 150, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0,0,255);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
    && movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}