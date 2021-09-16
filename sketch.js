var bullet , wall;
var speed , weight , thickness;

function setup() {
  speed = random( 223, 321 );
  weight = random( 30 , 52 );
  thickness = random( 22 , 83);

  bullet = createSprite(50, 200, 30, 10);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed;
 
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
    if(hasCollided(bullet, wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      
      if(damage > 10){
        wall.shapeColor = color(250 , 0 , 0)
      }
      if(damage < 10){
        wall.shapeColor = color(0 , 255 , 0)
      }
    }

   /*  if(deformation > 180)
    {
      bullet.shapeColor = color(255 , 0 , 0);
    }

    if(deformation < 180 && deformation > 100)
    {
      bullet.shapeColor = color(230 , 230 , 0);
    }

    if(deformation < 100)
    {
      bullet.shapeColor = color(0 , 255 , 0)
    }
  }*/
  
  drawSprites();
}

function hasCollided(Lbullet, lwall){
   bulletRightEdge = Lbullet.x + Lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge){
     return true
   }
   return false;
  }