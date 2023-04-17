
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Creating Global Variables
var ball, ground, rightSide, leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 800);

	// Trying to create our own world(Earth/Planet) and engine(Universe)
	engine = Engine.create();
	world = engine.world;

	// Giving Physics properties to the Crumpled paper.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1,
	}

	// Creatin circular Body object and adding it to World
	ball = Bodies.circle(200, 250, 20, ball_options);
	World.add(world, ball);
	
	//Using Ground class to create Ground and Bucket
	 ground = new Ground(1000, 780, 2000, 10);
	 leftSide = new Ground(1100, 720, 20, 120);
	 rightSide = new Ground(1350, 720, 20, 120);
	
	 // Keeping Matter Engine Updated
	 Engine.run(engine);
  
}

function keyPressed(){
	
	// Throwing the ball in Dustbin when UP_ ARROW is pressed.
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position,{x: 110, y: -45})
	}
}


function draw() {
  
  background(0);
  ground.displayGround();
  leftSide.displayGround();
  rightSide.displayGround();	
  fill("yellow")
  ellipse(ball.position.x, ball.position.y, 40, 40);
  
  drawSprites();
 
}



