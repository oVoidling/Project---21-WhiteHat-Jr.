
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundobj,head,wall1,wall2;
var left, right;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ball_options = {
	isStatic:false,
	restitution:0,
	friction:0,
	density:1.2
}

groundobj =new Ground(500,499,1000,5);
left = new Ground(700,480,5,170)
right = new Ground(600,480,5,170)
head = new Ground (500,1,1000,5)
wall1 = new Ground(1,250,5,500)
wall2 = new Ground(999,250,5,500)

ball = Bodies.circle(100,10,20,ball_options)
World.add(world,ball);


	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundobj.show()
  head.show()
  wall1.show()
  wall2.show()
  left.show()
  right.show()

  drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-70});
	}
}

keyPressed();
