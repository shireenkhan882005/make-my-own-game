/*const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies*/

var engine,world,database,flowerflower1img,flower2img,flower3img,player,playerimg
var invisibleground;

function preload(){
  bg= loadImage("images/background.png")
  basketImg = loadImage ("images/basket2.png")
  butterflyimg= loadAnimation ("images/ba1.png","images/ba2.png", "images/ba3.png","images/ba4.png","images/ba5.png","images/ba6.png","images/ba7.png","images/ba8.png","images/ba9.png","images/ba10.png","images/ba11.png","images/ba12.png","images/ba13.png","images/ba14.png")
  flower2img=loadImage("images/flower2.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player=createSprite(width/4,height-100,50,50)
  player.addImage(basketImg) 

  invisibleground= createSprite(width/2,70,width,20)
invisibleground.visible=false

//butterfly=createSprite((Math.round(random(100,width-100)), 50,50,50))

}

function draw() {
  background(bg); 
  
  if(keyDown(LEFT_ARROW)){
    player.x -=5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x +=5
  }

 /* if(keyDown("space")){
    player.velocityY -=5
  }

  player.velocityY +=0.5*/



player.collide(invisibleground)


  spawnflowers()

  drawSprites();
}



function spawnflowers(){
  if(frameCount%20===0){
    flower=createSprite(400, 200, 50, 50);
    flower.velocityY=1
  
    flower.x=Math.round(random(width-10,50))

  // flower.addImage(flower2img)
    flower.scale=0.5


 var rand=Math.round(random(1,2))
    if (rand==1){
 flower.addImage(flower1img)}
     
 if (rand==2){
  flower.addImage(flower2img)}
 
      
    



  }
  }
