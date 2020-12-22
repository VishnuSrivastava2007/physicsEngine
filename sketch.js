const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var ball;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options ={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,options);
  World.add(world,ball);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  


  
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x,ground.position.y,400,20);
}

