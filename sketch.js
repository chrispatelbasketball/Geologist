
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, hammer, stone, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,694,800,12)
	hammer = new Hammer(400,350,80,40)
	stone = new Stone(200,660,80,80)
	rubber = new Rubber(600,660,80,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,200);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



