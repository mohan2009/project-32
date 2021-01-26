const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,spring,ball;
var score=0;
var backgroundImg
var bg="day.jpg"
var gameState = "onSling";
function preload(){
   getTime() 
   backgroundImg = loadImage("day.jpg");  
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new YellowBox(520,360,20,30);
  box3 = new GreenBox(540,360,20,30);
  box4 = new RedBox(560,360,20,30);
  box5 = new GreenBox(580,360,20,30);
  box6 = new YellowBox(600,360,20,30);

  box7 = new RedBox(510,330,20,30);
  box8 = new YellowBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new GreenBox(570,330,20,30);
  box11 = new RedBox(590,330,20,30);

  box12 = new YellowBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new RedBox(560,310,20,30);
  box15 = new GreenBox(580,310,20,30);

  box16 = new YellowBox(530,280,20,30);
  box17 = new RedBox(550,280,20,30);
  box18 = new GreenBox(570,280,20,30);

  box19 = new BlueBox(540,250,20,30);
  box20 = new RedBox(560,250,20,30);

  box21 = new GreenBox(550,220,20,30);

  box22 = new GreenBox(500,135,20,30);
  box23 = new BlueBox(520,135,20,30);
  box24 = new YellowBox(540,135,20,30);
  box25 = new RedBox(560,135,20,30);
  box26 = new GreenBox(580,135,20,30);
  box27 = new YellowBox(600,135,20,30);

  box28 = new BlueBox(510,105,20,30);
  box29 = new RedBox(530,105,20,30);
  box30 = new YellowBox(550,105,20,30);
  box31 = new GreenBox(570,105,20,30);
  box32 = new RedBox(590,105,20,30);

  box33 = new YellowBox(520,75,20,30);
  box34 = new BlueBox(540,75,20,30);
  box35 = new RedBox(560,75,20,30);
  box36 = new GreenBox(580,75,20,30);
  
  box37 = new YellowBox(530,45,20,30);
  box38 = new BlueBox(550,45,20,30);
  box39 = new GreenBox(570,45,20,30)

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,40);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background("black");
  Engine.update(engine);  
   if(backgroundImg) {
    background(backgroundImg);
}
  
text("Score:"+score,650,40)

  
 ball.display();
  box1.display();
  box1.score()
  box2.display();
  box2.score()
  box3.display();
  box3.score()
  box4.display();
  box4.score()
  box5.display();
  box5.score()
  box6.display();
  box6.score()

  box7.display();
  box7.score()
  box8.display();
  box8.score()
  box9.display();
  box9.score()
  box10.display();
  box10.score()
  box11.display();
box11.score()
  box12.display();
  box12.score()
  box13.display();
  box13.score()
  box14.display();
  box14.score()
  box15.display();
box15.score()
  box16.display();
  box16.score()
  box17.display();
  box17.score()
  box18.display();
box18.score()
  box19.display();
  box19.score()
  box20.display();
box20.score()
  box21.display();
  box21.score()
  box22.display();
  box22.score()
  box23.display();
  box23.score()
  box24.display();
  box24.score()
  box25.display();
  box25.score()
  box26.display();
  box26.score()
  box27.display();
  box27.score()

  box28.display();
  box28.score()
  box29.display();
  box29.score()
  box30.display();
  box30.score()
  box31.display();
    box31.score()

  box32.display();
    box32.score()


  box33.display();
    box33.score()
   box34.display();
     box34.score()

  box35.display();
    box35.score()

  box36.display();
    box36.score()

  box37.display();
    box37.score()

  box38.display();
    box38.score()

  box39.display();
  box39.score()

  
  spring.display();
  ground.display();
  groundHovering.display();
  //keyPressed();

} 

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}}

function mouseReleased(){
  spring.release();
  gameState="onSling"
}

function keyPressed(){
if(keyCode===32){

spring.attach(ball.body)


}


} 
async function getTime(){
var api=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
var json=await api.json()
var dateTime=json.datetime
var time=dateTime.slice(11,13);
if(time>06&&time<14){
bg="day.jpg"


}
else{
bg="night.jpg"


}
backgroundImg=loadImage(bg)
console.log(json)

}