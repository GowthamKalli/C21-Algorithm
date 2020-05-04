var FixedRect, MovingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,400);
  FixedRect = createSprite(100, 200, 30, 80);
  FixedRect.shapeColor = "green";
  //FixedRect.velocityX = 5;

  MovingRect = createSprite(800,200,80,30);
  MovingRect.shapeColor = "green";
  //MovingRect.velocityX = -5;

  gameObject1 = createSprite(1000,200,60,50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityX = -2;

  gameObject2 = createSprite(500,200,60,50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityX = 2;

  gameObject3 = createSprite(400,100,60,50);
  gameObject3.shapeColor = "green"

  gameObject4 = createSprite(200,300,60,50);
  gameObject4.shapeColor = "green";
}

function draw() {

  background(0);  

  MovingRect.x = mouseX;
  MovingRect.y = mouseY;

  if(isTouching(MovingRect,gameObject3)) {
     MovingRect.shapeColor = "red";
     gameObject3.shapeColor = "red";
  }

  else{
    MovingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  bounce(gameObject1,gameObject2);

  drawSprites();
}
