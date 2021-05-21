const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper
var world;


function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(width-200,650);
	paper = new Paper(width/2,height/2)

	Engine.run(engine);
}


function draw() {
  background(230);
 

  paper.display();
  groundObject.display();
  dustbinObj.display();
  
  paper.depth = dustbinObj.depth + 1

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-1000});
    }

	if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
    }

	if(keyDown("o")){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-100});
    }

	if(keyCode === LEFT_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:-60,y:-0});
    }
}