
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, dustbin, paper;

function setup() {
	createCanvas(800, 400);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
Engine.run(engine);
	//Create the Bodies Here.

	dustbin1 = new Dustbin(590,280,200,100);

	//dustbin2 = new Dustbin(597,323,20,75)

	//dustbin3 = new Dustbin(722,323,20,75);



paper = new Paper(100,350,30);

ground = new Ground(800,380,1600,13);
	
{
	isStatic : true
};
World.add(world,ground);

  
}


function draw() {
  background(255);
  Engine.update(engine);
rectMode(CENTER);


dustbin1.display();
//dustbin2.display();
//dustbin3.display();

paper.display();

ground.display();

 
}



function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x:100,
			y:-160
		});
			
		}
	
	}
