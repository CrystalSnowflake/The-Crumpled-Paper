const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var x = 480;
var y = 660;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);

	engine = Engine.create();
	world = engine.world;

	render = Render.create({ element:document.body, engine:engine, options:{ width: 1200, height: 700, wireframes: false }});
	Render.run(render)

	ground1 = new Ground(700/2, 700/1.08, 700, 20);
	bin1 = new Bin(x, y, 200, 20); // the right side
	bin2 = new Bin(x - 20, y - 130, 20, 150); // the bottom side
	bin3 = new Bin(x + 180, y - 130, 20, 150); // the left side

	//paper1
	paper1 = new Ball(121, 646, 60);
	

	Engine.run(engine);
  
}


function draw() {
  background(rgb(247, 118, 118));
  Engine.update(engine);

  
  ground1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
		Body.applyForce(paper1.body, paper1.body.position,{x:85, y: -85});
	}
}



