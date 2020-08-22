// Creating Engine, World, Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var score = 0;
var bg = "bg.png";  
var backgroundImg;

function preload() {
	getBackgroundImg();
}

function setup() {
	// Creating Canvas
	createCanvas(1450, 750);

	engine = Engine.create();
	world = engine.world;

	// Creating rectangle obstacles
	rect4_1 = new Rectangle(850, 600, "crimson");
	rect4_2 = new Rectangle(900, 600, "darkviolet");
	rect4_3 = new Rectangle(950, 600, "aquamarine");
	rect4_4 = new Rectangle(1000, 600, "salmon");
	rect4_5 = new Rectangle(1050, 600, "canary");
	rect4_6 = new Rectangle(1100, 600, "gold");
	rect4_7 = new Rectangle(1150, 600, "SandyBrown");
	rect3_1 = new Rectangle(900, 575, "SandyBrown");
	rect3_2 = new Rectangle(950, 575, "yellow");
	rect3_3 = new Rectangle(1000, 575, "orange");
	rect3_4 = new Rectangle(1050, 575, "Navy");
	rect3_5 = new Rectangle(1100, 575, "tomato"); 
	rect2_1 = new Rectangle(950, 500, "lime");
	rect2_2 = new Rectangle(1000, 500, "coral");
	rect2_3 = new Rectangle(1050, 500, "LightGreen");
	rect1_1 = new Rectangle(1000, 425, "DodgerBlue");
	// Creating ground
	ground = new Ground(725, 730, 1450, 10);
	ground2 = new Ground(1000, 650, 400, 10);

	rect2_4_1 = new Rectangle(600 + 25, 290, "crimson");
	rect2_4_2 = new Rectangle(650 + 25, 290, "darkviolet");
	rect2_4_3 = new Rectangle(700 + 25, 290, "aquamarine");
	rect2_4_4 = new Rectangle(750 + 25, 290, "salmon");
	rect2_4_5 = new Rectangle(800 + 25, 290, "canary");
	rect2_4_6 = new Rectangle(850 + 25, 290, "gold");
	rect2_4_7 = new Rectangle(900 + 25, 290, "SandyBrown");
	rect2_3_1 = new Rectangle(650 + 25, 215, "SandyBrown");
	rect2_3_2 = new Rectangle(700 + 25, 215, "yellow");
	rect2_3_3 = new Rectangle(750 + 25, 215, "orange");
	rect2_3_4 = new Rectangle(800 + 25, 215, "Navy");
	rect2_3_5 = new Rectangle(850 + 25, 215, "tomato"); 
	rect2_2_1 = new Rectangle(700 + 25, 145, "lime");
	rect2_2_2 = new Rectangle(750 + 25, 145, "coral");
	rect2_2_3 = new Rectangle(800 + 25, 145, "LightGreen");
	rect2_1_1 = new Rectangle(750 + 25, 70, "DodgerBlue");
	ground3 = new Ground(800, 325, 400, 10);

	// Creating body attached to slingshot
	hexagon = new Hexagon(100, 650, 20);
	chain = new SlingShot(hexagon.body, {x:200, y:400})

	Engine.run(engine);
}


function draw() {
	// Setting background color to white
	if(backgroundImg) {
		background(backgroundImg);
	}
    
	textSize(20);
	fill("white");
	text("Score:" + score, 1200, 100)

	Engine.update(engine)
	// Displaying objects
	rect4_1.display();
	rect4_2.display();
	rect4_3.display();
	rect4_4.display();
	rect4_5.display();
	rect4_6.display();
	rect4_7.display();
	rect3_1.display();
	rect3_2.display();
	rect3_3.display();
	rect3_4.display();
	rect3_5.display();
	rect2_1.display();
	rect2_2.display();
	rect2_3.display();
	rect1_1.display();
	

	rect2_4_1.display();
	rect2_4_2.display();
	rect2_4_3.display();
	rect2_4_4.display();
	rect2_4_5.display();
	rect2_4_6.display();
	rect2_4_7.display();
	rect2_3_1.display();
	rect2_3_2.display();
	rect2_3_3.display();
	rect2_3_4.display();
	rect2_3_5.display();
	rect2_2_1.display();
	rect2_2_2.display();
	rect2_2_3.display();
	rect2_1_1.display();

	rect4_1.score();
	rect4_2.score();
	rect4_3.score();
	rect4_4.score();
	rect4_5.score();
	rect4_6.score();
	rect4_7.score();
	rect3_1.score();
	rect3_2.score();
	rect3_3.score();
	rect3_4.score();
	rect3_5.score();
	rect2_1.score();
	rect2_2.score();
	rect2_3.score();
	rect1_1.score();
	

	rect2_4_1.score();
	rect2_4_2.score();
	rect2_4_3.score();
	rect2_4_4.score();
	rect2_4_5.score();
	rect2_4_6.score();
	rect2_4_7.score();
	rect2_3_1.score();
	rect2_3_2.score();
	rect2_3_3.score();
	rect2_3_4.score();
	rect2_3_5.score();
	rect2_2_1.score();
	rect2_2_2.score();
	rect2_2_3.score();
	rect2_1_1.score();

	ground.display();
	ground2.display();
	hexagon.display();
	chain.display();
	ground3.display();
	drawSprites();
}

// For draging the body back
function mouseDragged() {
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y: mouseY});
}
// When mouse is released then this function will work
function mouseReleased() {
	chain.fly();
}
// Function to attach the body back to slingshot
function keyPressed() {
    if (keyCode === 32) {
        chain.attach(hexagon.body);
    }
}
// Update the background of the project based on day/night
async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);

}
