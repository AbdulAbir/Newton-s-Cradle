
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, mConstraint);

	//Creating the Bodies .
	pendulum1 = new pendulum(500,500,0);
	pendulum2 = new pendulum(550,500,0);
	pendulum3 = new pendulum(600,500,0);
	pendulum4 = new pendulum(650,500,0);
	pendulum5 = new pendulum(700,500,0);
	roofObject = new roof(600,200,300,20)
	sling1 = new sling(pendulum1,{x:500,y:450});
	sling2 = new sling(pendulum2,{x:550,y:450});
	sling3 = new sling(pendulum3,{x:600,y:450});
	sling4 = new sling(pendulum4,{x:650,y:450});
	sling5 = new sling(pendulum5,{x:700,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  roofObject.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();

 
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) 
  {
   Matter.Body.setPosition( pendulum1.body,{ x: mouseX, y: mouseY})
    
  }
}













