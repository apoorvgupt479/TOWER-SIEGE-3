const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2,ground3;
var box,box2;

var gameState = "onSling";

var score = 0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100,100);

    ground = new Ground(600,570,1200,60,210,105,30);
    stage = new Ground(150,465,300,150,210,105,30)

    ground2 = new Ground(550,450,400,20,0,100,0);
    ground3 = new Ground(900,300,400,20,0,100,0);

    box = new Box(625,410,50,60);
    box2 = new Box(425,410,50,60,70,130,180);
    box3 = new Box(475,410,50,60,220,20,60);
    box4 = new Box(525,410,50,60,139,69,19);
    box5 = new Box(575,410,50,60,70,130,180);
    box6 = new Box(675,410,50,60,220,20,60);

    box7 = new Box(475,350,50,60,255,255,0);
    box8 = new Box(525,350,50,60,70,130,180);
    box9 = new Box(575,350,50,60,220,20,60);
    box10 = new Box(625,350,50,60,139,69,19);

    box11 = new Box(525,290,50,60,139,69,19);
    box12 = new Box(575,290,50,60,255,255,0);
    box13 = new Box(550,230,50,60,220,20,60);

    box14 = new Box(775,260,50,60,255,255,0);
    box15 = new Box(825,260,50,60,70,130,180);
    box16 = new Box(875,260,50,60,220,20,60);
    box17 = new Box(925,260,50,60,139,69,19);
    box18 = new Box(975,260,50,60,70,130,180);
    box19 = new Box(1025,260,50,60,220,20,60);

    box20 = new Box(825,200,50,60,255,255,0);
    box21 = new Box(875,200,50,60,70,130,180);
    box22 = new Box(925,200,50,60,220,20,60);
    box23 = new Box(975,200,50,60,139,69,19);

    box24 = new Box(875,140,50,60,139,69,19);
    box25 = new Box(925,140,50,60,255,255,0);
    box26 = new Box(900,80,50,60,220,20,60);

    slingShot = new SlingShot(ball.body,{x:200,y:300});
}

function draw(){
    background(50,0,200);
    Engine.update(engine);

    textSize(35);
    fill(255);
    text("Score : " + score,30,50);
    
    ground.display();
    stage.display();
    ground2.display();
    ground3.display();

    box.display();
    box.score();
    box2.display();
    box2.score;
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();

    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();

    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();

    box20.display();
    box20.score();
    box21.display();
    box21.score();
    box22.display();
    box22.score();
    box23.display();
    box23.score();

    box24.display();
    box24.score();
    box25.display();
    box25.score();
    box26.display();
    box26.score();

    ball.display();
    slingShot.display();
}

function mouseDragged(){
    //if(gameState !== "launch"){
        Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    //}
}

function mouseReleased(){
    slingShot.fly();
    gameState = "launch";
}

function keyPressed(){
    if(keyCode === 32){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body,{x:200,y:300});
        slingShot.attach(ball.body);
    }
}
