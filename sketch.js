const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1, ground2, circleImg;
function preload() { 
  circleImg=loadImage("circle.jpg"); }

function setup() {
  createCanvas(1200,600);
  engine=Engine.create()
  world=engine.world;
  /*circleObject=createSprite(200,200,20,20)
  circleObject.addImage("circleImg", circleImg);
  circleObject.scale=0.5*/
  ground=new Ground(600,400,250,10)
  ground2=new Ground(1000, 290, 250,10);
  //STAND 1
//layer 1
  box=new Box(600,375,30,40)
  box1 =new Box(570,375,30,40)
  box2 =new Box(540,375,30,40)
  box3 =new Box(510,375,30,40)
  box4 =new Box(630,375,30,40)
  box5 =new Box(660,375,30,40)
  box6 =new Box(690,375,30,40)
  //layer 2
  box7 =new Box(600,335,30,40)
  box8 =new Box(570,335,30,40)
  box9 =new Box(540,335,30,40)
  box10=new Box(630,335,30,40)
  box11=new Box(660,335,30,40)
  box12 =new Box(630,335,30,40)
  //layer 3
  box13 =new Box(600,295,30,40)
  box14 =new Box(630,295,30,40)
  box15 =new Box(570,295,30,40)
  //layer 4
  box16 =new Box(600,255,30,40)
   //STAND 2
  //layer 1
  box17= new Box(1000,265,30,40)
  box19= new Box(1030,265,30,40)
  box20= new Box(1060,265,30,40)
  box21= new Box(1090,265,30,40)
  box22= new Box(970,265,30,40)
  box23= new Box(940,265,30,40)
  box24= new Box(910,265,30,40)
  //layer2
  box25= new Box(1000,225,30,40)
  box26= new Box(1030,225,30,40)
  box27= new Box(1060,225,30,40)
  box29= new Box(970,225,30,40)
  box30= new Box(940,225,30,40)
  //layer 3
  box31= new Box(1000,185,30,40)
  box33= new Box(1030,185,30,40)
  box32= new Box(970,185,30,40)
  box34=new Box(1000,145,30,40);
 //slingshot
  slingshot=new Slingshot(polygon.body,{x:200,y:100});
 
}

function draw() {
  background(0); 
  polygon=Bodies.circle(50,200,70);
  World.add(world,polygon);
  
  imageMode(CENTER);
  image(circleImg,polygon.position.x,polygon.position.y,60,60);
  drawSprites();
  ground.display();
  ground2.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 box17.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  box33.display()
  box34.display()
  slingshot.display();
    for(var i=0; i < birds.length; i++){
        birds[i].display();}

}
function mouseDragged(){
  if (gameState!=="launched"){
     Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
 }
}


function mouseReleased(){
 slingshot.fly();
 gameState = "launched";
}
