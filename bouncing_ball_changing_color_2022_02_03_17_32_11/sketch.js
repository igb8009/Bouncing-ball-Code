let x = 25;
let y = 50;
let xspeed = 2;
let yspeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background("white");
  circle(x,y,50);
  x += xspeed;
  y += yspeed;
  if (x> width-25){
    xspeed = - xspeed;  
    fill(0, 255, 0);
  }
  
  if (x<25){
   xspeed = - xspeed;  
    fill(255,0,0);
  }
  
  if (y> height-25){
    yspeed = -yspeed;
    fill(0, 0, 255);
  }
  
  if (y<25){
  yspeed = -yspeed;
   fill(random(255),random(255),random(255))
  }
}