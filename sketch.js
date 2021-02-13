
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObj;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
    paperObj = new paper(100, 250, 10);
	dustbinObj=new dustbin(1200,650);

	var render = Render.create({
		element:document.body,
		engine:engine, 
		options:{
		width:1600,
		height:700,
		wireFrames:false
		}
	});

	

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if(keyCode === SPACE){
		Mtter.Body.applyForce(paperObj.body, paperObj.body.position, {x:115, y:-130});
	}
}