const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg,bg1="snow3.jpg";
var snow = [];
var maxSnow = 10;

function preload() {
 bg= loadImage("snow3.jpg") 
}
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
    if(frameCount % 200 === 0)
    {
         for(var i=0; i<maxSnow; i++)
        {
         snow.push(new Snow(random(0,400),random(0,400)))
        }
    }
    
}

function draw() {
 
    background(bg)

for(var i = 0; i<maxSnow; i++){
  snow[i].showSnow(); 
  snow[i].updateY()
 }
  Engine.update(engine);  
  drawSprites();
}
