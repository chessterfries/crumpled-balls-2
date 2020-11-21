
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin;
var fall1, fall2, fall3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,50);
	ground = new Ground(675,670,1350,20);

	Engine.run(engine);

	dustbin = new Dustbin(600,620);
	fall1 = new Fall(1100,670,250,20);
	fall2 = new Fall(970,500,20,300);
	fall3 = new Fall(1230,500,20,300);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
	paper.display(); 
	ground.display();
	dustbin.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(paper.body,paper.body.position,{x:130,y:-130});

	}
}