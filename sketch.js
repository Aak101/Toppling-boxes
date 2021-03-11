const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,80,80);
    box2 = new Box(920,380,80,80);
    box3 = new Box(700,250,80,80)
    box4 = new Box(920,250,80,80)
    box5 = new Box(830,120,80,80)
    pig1 = new Pig(810,240)
    pig2 = new Pig(810,380)
    log1 = new Log(810,360,300,PI/2)
    log2 = new Log(810,230,300,PI/2)
    log3 = new Log(760,80,150,PI/4)
    log4 = new Log(870,80,150,-PI/4)
    bird = new Bird(200,200);
    
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}