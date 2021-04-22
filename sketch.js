var fixedRect, movingRect, box1, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(500,300,60,20)
  box1.shapeColor = "green"
  box1.debug = true;
  box2 = createSprite(250,317,65,85)
  box2.shapeColor = "green"
  box2.debug = true;
  ;
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect,fixedRect); 
  isTouching(box1,box2);
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
  && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
  && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
ob1.shapeColor = "red";
ob2.shapeColor = "red";
}
else {
ob1.shapeColor = "green";
ob2.shapeColor = "green";
}};