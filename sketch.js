var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //creating the sprites for car and wall
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200, thickness, height/2);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  bullet.collide(wall,calculate);
  drawSprites();
}

function calculate(){
  bullet.velocityX = 0;
  var damage = ((0.5 * weight * speed* speed)/(thickness * thickness * thickness));
  if(damage <= 10){
    wall.shapeColor = "green";
  } else {
    wall.shapeColor = "red";
  }
}

