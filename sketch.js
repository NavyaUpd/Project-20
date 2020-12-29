var car, wall, deformation;
var speed, weight;

function setup() {
  createCanvas(1300,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  wall.depth = car.depth;
  car.depth += 1;

  deformation = Math.round(0.5*weight*speed*speed/22500);

}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  /*
  car.x = mouseX;
  car.y = mouseY;
  */

  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    textSize(20);
    fill(255,255,255);
    text("Deformation: " + deformation, 100, 380);

    if (deformation < 100){
      car.shapeColor = "green";
    } else if (deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    } else {
      car.shapeColor = "red";
    }
  }

}