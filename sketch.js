var car,wall;
var speed, weight;

function setup(){
    createCanvas(1600,400)
    wall= createSprite(1200,200,60,height/2)
    car = createSprite(50,200,50,50)
    speed=random(55,90)
    weight=random(400,1500)
    car.velocityX=speed;
    car.shapeColor="white";
    wall.shapeColor="plum";
}
function draw(){
  background(0)
  if(isTouching(wall,car)){
    car.velocityX=0;
    var D = 0.5*weight*speed*speed/22500
  
  if(D>180)
{
  car.shapeColor="red";
} 
if(D<180 && D>100 ){
  car.shapeColor="yellow";
}
if(D<100) {
  car.shapeColor= "green";
}}
  drawSprites()
}