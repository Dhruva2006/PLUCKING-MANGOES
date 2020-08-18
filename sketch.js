
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Boy, boy;

function preload()
{
	boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Boy = (boy, {x: 200, y: 200});


	//Create the Bodies Here.

	tree1 = new Tree(700, 150, 250, 350);

	mango1 = new Mango(600, 400, 10, 10);
	mango2 = new Mango(610, 400, 10, 10);
	mango3 = new Mango(620, 400, 10, 10);
	stone1 = new Stone(630, 400, 10, 10);
	

	chain1 = new Chain(stone.body, mango1.body);
	slingshot = new SlingShot(stone.body,{x:190, y:190});

	

	function detectollision(stone1 , mango) {
		mangoBodyPosition = mango.body.position
		stoneBoadyPosition = stone.body.position

		var distance = dist(stoneBodyPosition.x, stoneBoadyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance < -mango.r + stone1.r){
			Matter.Body.setStatic(mango.body, false);
		}
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  chain1.display();
  stone1.display();

  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);


  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420})
		launcherObject.attach(stone.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectollision(stone1, mango1) {
	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone1.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance < -mango1.r + stone1.r) {
		Matter.Body.setStatic(mango1.body, false);
	}
}



