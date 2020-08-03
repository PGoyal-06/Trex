var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloud,cloud_image,obstacles,obstacleI1,obstacleI2,obstacleI3,obstacleI4,obstacleI5,obstacleI6,cloudGroup,obstacleGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
 cloud_image = loadImage("cloud.png");
 obstacleI1 = loadImage("obstacle1.png");
obstacleI2 = loadImage("obstacle2.png");
obstacleI3 = loadImage("obstacle3.png");  
 obstacleI4 = loadImage("obstacle4.png"); 
obstacleI5 = loadImage("obstacle5.png");  
obstacleI6 = loadImage("obstacle6.png");  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  SpawnClouds();
  spawnObstacles();
  
  drawSprites();
}



function SpawnClouds(){
if(frameCount%60===0){
 var r = Math.round(random(50,150)); 
cloud = createSprite(600,r,20,20);  
cloud.addImage("clouds",cloud_image);  
cloud.velocityX = -6;
cloud.scale = 0.5;
cloud.lifetime = 100;    
cloudGroup.add(cloud);  
trex.depth = cloud.depth + 1; 
} 
}



function spawnObstacles(){
if(frameCount%80===0){  
obstacles = createSprite(600,170,20,20);
obstacles.velocityX = -6;
obstacles.lifetime = 100;
obstacles.scale = 0.7; 
obstacleGroup.add(obstacles);  
var r = Math.round(random(1,6));
                   
switch(r){
    
  case 1 : obstacles.addImage(obstacleI1);    
    break;
    
  case 2 : obstacles.addImage(obstacleI2);    
    break;
    
  case 3 : obstacles.addImage(obstacleI3);    
    break;
    
  case 4 : obstacles.addImage(obstacleI4);    
    break;
    
  case 5 : obstacles.addImage(obstacleI5);    
    break;
    
  case 6 : obstacles.addImage(obstacleI6);    
    break;
    
    default:break;
}  
}  
}
  
  
