var sea,ship;
var seaImg,shipImg;
var pirate_girl; var pirate_animator;
 var Wave_loader;

function preload(){
  shipImg = loadAnimation("ship-1.png");
  shipImg = loadAnimation("ship-1.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");

  pirate_animator = loadImage("pirate waving.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
 

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

   
  pirate_girl = createSprite(200,200);
  pirate_girl.addImage(pirate_animator);
  pirate_girl.scale = 0.2;

  ship = createSprite(150,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.6;

  
}




function draw() {
  background(0);
  sea.velocityX = -3;

  
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
  }

 
  drawSprites();
  fill("black");
  textSize(12);
  text("Ahoy there! Welcome aboard to The Majestica !",145,100);
}