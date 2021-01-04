
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(300,100,20);
	//paper2 = new Paper(200,100,20)
	
	dustbin1 = new Dustbin(1000,500,200,20);
	dustbin2 = new Dustbin(1098,460,20,100);
	dustbin3 = new Dustbin(900,460,20,100);

    ground = new Ground(600,520,1200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
//  paper2.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
   
  keyPressed();
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
     
  }

}



