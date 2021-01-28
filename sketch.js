const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball,ball2,ball3,ball4,ball5,ball6,ball7,ball8;



function setup(){
    var canvas = createCanvas(2000,400);
    engine = Engine.create();
    world = engine.world;




    var ball_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }


    var ball2_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    var ball3_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }


    var ball4_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    var ball5_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    var ball6_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    var ball7_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    var ball8_options ={
        'restitution': 0.3,
        'friction':5,
        'density':1
    }

    ball = Bodies.circle(1000,100,20, ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(700,100,20, ball2_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(700,100,20, ball3_options);
    World.add(world,ball3);

    ball4= Bodies.circle(700,100,20, ball4_options);
    World.add(world,ball4);

    ball5 = Bodies.circle(700,100,20, ball5_options);
    World.add(world,ball5);

    ball6 = Bodies.circle(700,100,20, ball6_options);
    World.add(world,ball6);

    ball7 = Bodies.circle(700,100,20, ball7_options);
    World.add(world,ball7);

    ball8= Bodies.circle(700,100,20, ball8_options);
    World.add(world,ball8);

    ground = new Ground(600,height,2200,20);

    iron=new Iron(210,320);

    stone=new Stone(1000,380,100,100);

    hammer=new Hammer(500,200)
}

function draw(){
    background("yellow");
    Engine.update(engine);
    
    fill("blue")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 40, 40);
 
    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 8, 8);

    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y, 8, 8);

    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipse(ball4.position.x, ball4.position.y, 8, 8);

    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball5.position.x, ball5.position.y, 8, 8);

    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball6.position.x, ball6.position.y, 8, 8);


    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball7.position.x, ball7.position.y, 8, 8);


    fill("red")
    strokeWeight(4);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(ball8.position.x, ball8.position.y,8, 8);

    ground.display();
    iron.display();
    stone.display();
    hammer.display();
}