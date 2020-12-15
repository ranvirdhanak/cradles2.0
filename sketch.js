const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backgroundImg;
var pendulum;
var roof;
var sling1,sling2,sling3,sling4,sling5;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
function preload(){

backgroundImg = loadImage("background.png");

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
  roof = new Roof(400,100,300,10);
  pendulum1 = new Pendulum(300,300);
  pendulum2 = new Pendulum(350,300);
  pendulum3 = new Pendulum(400,300);
  pendulum4 = new Pendulum(450,300);
  pendulum5 = new Pendulum(500,300);
  sling1 = new Sling(pendulum1.body,roof.body,-100)
  sling2 = new Sling(pendulum2.body,roof.body,-50)
  sling3 = new Sling(pendulum3.body,roof.body,0)
  sling4 = new Sling(pendulum4.body,roof.body,50)
  sling5 = new Sling(pendulum5.body,roof.body,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
   roof.display();
   sling1.display();
   sling2.display();
   sling3.display();
   sling4.display();
   sling5.display();
  pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(pendulum1.body, pendulum1.body.position, {x: -50,y:-50})
	}
}
