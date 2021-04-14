const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0
var bg

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,500,1200,20);
    platform = new Ground(600, 380, 210, 20);
    box1=new Box(510,360,30,40)
    box2=new Box(540,360,30,40)
    box3=new Box(570,360,30,40)
    box4=new Box(600,360,30,40)
    box5=new Box(630,360,30,40)
    box6=new Box(660,360,30,40)
    box7=new Box(690,360,30,40)

    box8=new Box(540,320,30,40)
    box9=new Box(570,320,30,40)
    box10=new Box(600,320,30,40)
    box11=new Box(630,320,30,40)
    box12=new Box(660,320,30,40)

    box13=new Box(570,280,30,40)
    box14=new Box(600,280,30,40)
    box15=new Box(630,280,30,40)

    box16=new Box(600,240,30,40)

    
    ball=new Ball(100,200,50)

    slingshot=new SlingShot(ball.body,{x:200,y:300})
    getBackgroundImg()
    Engine.run(engine)

}
function draw(){
    if(bg)
background(bg)
textSize(20);
fill("yellow");
text("Drag the polygon to destroy the blocks",300,30);
text("SCORE : "+score,750,40); 
textSize(20);
text("Press Space to get a second Chance to Play!!",300,70);
ground.display()
platform.display()
fill("blue")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("violet")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("yellow")
box13.display();
box14.display();
box15.display();
fill("red")
box16.display();
ball.display();
slingshot.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
       
    }
}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson=await response.json()
    var daytime=responsejson.datetime
    console.log(daytime)
    var hour=daytime.slice(11,13)
    console.log(hour)
    if(hour>=06&&hour<=19){
   bg="lightblue" 
    }else {
   bg="black"
    }
}