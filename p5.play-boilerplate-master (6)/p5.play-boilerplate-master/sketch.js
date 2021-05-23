var path,boy;
var pathImg,boyImg;
var car1,car2,car3,truck,score=0;
var gameState=


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  car1=loadImage("car4_prev_ui_prev_ui.png");
  car2=loadImage("car2_prev_ui_prev_ui.png");
  car3=loadImage("car3_prev_ui_prev_ui.png");
  truck=loadImage("truck_prev_ui_prev_ui.png");
 
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,height/2);
path.addImage(pathImg);
path.velocityY = 4;
  
  cars=new Group();

//creating boy running
boy = createSprite(20,height-10);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

  
   boy.setCollider("circle",0,0,500);


}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  car();
 
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
    
  }
  
   score=score+Math.round(frameCount/100);

    if(cars.isTouching(boy)){
    cars.destroyEach();
    }

  drawSprites();
  textSize(20);
  fill(255);
  text("score  "+score,500,50);
  
   if(cars.isTouching(boy)){
   fill("white");
   stroke("black");
   textSize(30);
   text("GAME OVER",displayWidth/2, displayHeight/2);
  }
 

}

function car(){
  if(frameCount%100===0){
  var obj=createSprite(20,-10);
  obj.scale=0.9;
  obj.velocityY=+4+Math.round(frameCount/200);
    cars.add(obj)
  obj.x=Math.round(random(10,width-50))  
  var n=Math.round(random(1,4))
  switch(n){
  case 1:obj.addImage(car1);
  break
   case 2:obj.addImage(car2);
  break
   case 3:obj.addImage(car3);
  break
   case 4:obj.addImage(truck);
  break
  }
}}
