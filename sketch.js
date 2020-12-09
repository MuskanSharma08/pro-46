var bg;
var home, over, overImg;
var edges;
var b1, b2, b3, b4;
var p1, p2, p3;
var ghost, ghost1, ghost2, ghost3
var boy, boyImg;
function preload() {
  bg = loadImage("back.jpg");
  ghost = loadImage("ghost.png");
  overImg = loadImage("over.png")
  boyImg = loadImage("khiladi.png")
}

function setup() {
  createCanvas(500, 600);
  p1 = createSprite(150, 170, 300, 10);
  p2 = createSprite(350, 350, 300, 10);
  p3 = createSprite(150, 530, 300, 10);

home = createSprite(475, 575, 50, 50);
  b1 = createSprite(250, 02, 500, 5);
  b2 = createSprite(250, 598, 500, 5);
  b3 = createSprite(498, 300, 05, 600);
  b4 = createSprite(03, 300, 05, 600);

  boy = createSprite(60, 80, 20, 20);
  boy.addImage(boyImg);
  boy.scale = 0.3;
  boy.setCollider("rectangle", 0, 0, 200, 500)

  ghost1 = createSprite(380, 50, 20, 20);
  ghost1.addImage(ghost);
  ghost1.scale = 0.5;
  ghost1.velocityY = 5;

  ghost2 = createSprite(150, 50, 20, 20);
  ghost2.addImage(ghost);
  ghost2.scale = 0.5;
  ghost2.velocityY = 5;

  over = createSprite(250, 180, 50,50);
  over.addImage("gameOver", overImg)
  over.visible = false;
  over.scale = 0.2
}

function draw() {
  background(bg);
  edges = createEdgeSprites();
  //to move right
  if (keyWentDown(RIGHT_ARROW)) {
    boy.velocityX = 5;
  }
  if (keyWentUp(RIGHT_ARROW)) {
    boy.velocityX = 0;
  }
  //to move left
  if (keyWentDown(LEFT_ARROW)) {
    boy.velocityX = -5;
  }
  if (keyWentUp(LEFT_ARROW)) {
    boy.velocityX = 0;
  }
  //to move down
  if (keyWentDown(DOWN_ARROW)) {
    boy.velocityY = 5;
  }
  if (keyWentUp(DOWN_ARROW)) {
    boy.velocityY = 0;
  }
  //to move up
  if (keyWentDown(UP_ARROW)) {
    boy.velocityY = -5;
  }
  if (keyWentUp(UP_ARROW)) {
    boy.velocityY = 0;
  }
  if (boy.isTouching(ghost1)) {
    ghost1.velocityY = 0;
    ghost2.velocityY = 0;
    over.visible = true
  }
  if (boy.isTouching(ghost2)) {
    ghost1.velocityY = 0;
    ghost2.velocityY = 0;
    over.visible = true
  }
  if(boy.isTouching(home)){
    ghost1.velocityY = 0;
    ghost2.velocityY = 0;
    over.visible = true
     }

  boy.collide(b1);
  boy.collide(b2);
  boy.collide(b3);
  boy.collide(b4);
  boy.collide(p1);
  boy.collide(p2);
  boy.collide(p3);

  ghost1.bounceOff(edges[2]);
  ghost1.bounceOff(edges[3]);
  ghost2.bounceOff(edges[2]);
  ghost2.bounceOff(edges[3]);

  drawSprites();
}