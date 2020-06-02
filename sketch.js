var bullet, wall, thickness;
var bulletspeed, bulletWeight;


function setup() {
  createCanvas(1600,400);
  bulletSpeed = random(223, 321);
  bulletWeight = random(30, 52);
  bullet = createSprite(-800, 200, 40, 15);
  bullet.velocityX = bulletSpeed;
  thickness = random(22,83);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "0, 0, 0";
  bullet.shapeColor = "black";
} 
 
function draw() {
  background(255,255,255);  
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness *thickness *thickness);
    if (damage>10){
      wall.shapeColor = color(255, 0, 0);
    }
  
    if (damage<10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  lbulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(lbulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}


  