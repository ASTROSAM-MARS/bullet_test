// declaring variables
var bullet, wall;
var speed, weight, Thickness ;
var deformation;

function setup() {
  //creating canvas
  createCanvas(windowWidth,windowHeight);

  //creating bullet sprite and giving it its properties
  bullet = createSprite(0, height/2, 30, 5);
  bullet.velocityX = Math.round(random(20,30));
  bullet.shapeColor = "white";
  speed = bullet.velocityX;
  weight = Math.round(random(10,25));

  //giving thickness to the wall
  Thickness = Math.round(random(100,200));

  //creating wall sprite and giving it its properties
  wall = createSprite(width-200, height/2, Thickness  , height);
  wall.shapeColor = "white";

  //calculating deformation
  deformation = (0.5 * weight * speed * speed) / (Thickness * Thickness * Thickness);
}

function draw() {
//giving background colour
  background(0);  

  //checking collision of car with the wall and chaging its colour acoording to deformation 
  if(bullet.x - wall.x < bullet.width/2 + wall.width/2 && 
    wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
    bullet.y - wall.y < bullet.height/2 + wall.height/2 &&
    wall.y - bullet.y < bullet.height/2 + wall.height/2){
      bullet.velocityX = 0;

      if(deformation > 10){
        wall.shapeColor  = "red";
      }

      else {
        wall.shapeColor = "green";
      }
    }

    //creating sprites
  drawSprites();
}