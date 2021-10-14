const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
 var backgroundImage;
 var particles = [];

function preload(){
  backgroundImage=loadImage("snow2.jpg")
}



function setup() {
  createCanvas(1250,650);

  engine = Engine.create();
  world = engine.world;  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

      //create the particles using frameCount
      if(frameCount % 60 === 0){
        particles.push(new Particle(random(100,700),0))
      }
    
      //display the particles 
      for(var i = 0 ; i < particles.length ; i++){
        particles[i].display();
      }

}
