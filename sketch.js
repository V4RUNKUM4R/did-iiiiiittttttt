var sea;
var sea_Img;
var ship;
var ship_Anm;
function preload(){
  //load animations
  sea_Img=loadImage("sea.png");
  ship_Anm=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

}

function setup(){
  createCanvas(400,400);

  //create sprites
  sea=createSprite(500,200,400,400);
  sea.addImage(sea_Img);
  sea.scale=0.25;
  ship=createSprite(100,220,10,10);
  ship.addAnimation("ship_Anm",ship_Anm);
  ship.scale=0.2;
  
}

function draw() {
  sea.velocityX = -3;
  background("blue");
  //code reset background
  if(sea.x<0){
    sea.x= 500;
  }

  drawSprites();
}