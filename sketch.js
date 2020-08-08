var rectm,rectf

function setup() {
  createCanvas(800,400);
  rectm = createSprite(200, 300, 50, 100);
  rectf = createSprite(400, 200, 60, 30);
  
  //giving both rectangles colour
  rectm.shapeColor = "red";
  rectf.shapeColor = "red";
}

function draw() {
  background(0);
  //giving the moving rectangle movement
  rectm.x = mouseX;
  rectm.y = mouseY;
  
  if (rectm.x - rectf.x < rectf.width/2 + rectm.width/2 && rectf.x - rectm.x < rectf.width/2 + rectm.width/2 
    && rectm.y - rectf.y < rectf.height/2 + rectm.height/2 && rectf.y - rectm.y < rectf.height/2 + rectm.height/2) {
  
    rectm.shapeColor = "yellow";
    rectf.shapeColor = "yellow";
  }else{
    rectm.shapeColor = "red";
    rectf.shapeColor = "red";
  }

  drawSprites();
}