class Snow
{
constructor(x,y)
{
var options=
{
    restitution:0.1,
    friction:0.001,
    
}
this.image= loadImage("snow.png")
this.body= Bodies.circle(x,y,5,options);
this.radius=25;
World.add(world, this.body);
}

updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});

    }
}
showSnow()
{
 push()
    imageMode(CENTER);
    fill ("white")
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    if (frameCount % 200 === 0)
    {
      this.body.radius=49
    }
  pop()

   }
}

