const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rain,umbrella;
var engine, world;
var drops = [];

function setup(){
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    rain = new Drops(10,10,20,20);
    umbrella = new Umbrella(mouseX, mouseY,30,30);
}
function draw(){
    Engine.update(engine);
    background("lightblue");
    //var umbrella = new Umbrella(mouseX, mouseY);
        //generate objects
    for (let i = 0; i < 5; i++) {
        drops.push(new Drops(random(0, 500), 0));
    }


    //run the object
    for (let i = 0; i < drops.length; i++) {
        var p = drops[i];
        // update, check & compare, then display last
        p.move();
        // p.checkEdges();
        p.display();
        umbrella.display();
        if ((mouseX-50 < drops[i].x) && (drops[i].x < mouseX+50) && (drops[i].y > umbrella.y-10)) {;
            drops.splice(i,1);
        }

    }
    
}