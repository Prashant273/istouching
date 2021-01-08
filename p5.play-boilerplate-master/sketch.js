
var movrect,fixrect,r1,r2,r3,r4
function setup() {
  createCanvas(800,400);
  movrect=createSprite(400, 200, 50, 50);
  movrect.shapeColor="yellow";
  fixrect=createSprite(200,200,50,50)
  fixrect.shapeColor="yellow"
  r1=createSprite(300,250,50,50)
  r1.shapeColor="yellow"
  r2=createSprite(350,300,50,50)
  r2.shapeColor="yellow"
  r3=createSprite(420,145,50,50)
  r3.shapeColor="yellow"
  r4=createSprite(500,350,50,50)
  r4.shapeColor="yellow"
}
function draw() {
  background(12,205,67); 
  movrect.x=mouseX;
  movrect.y=mouseY;
  console.log(movrect.y-fixrect.y);
  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2&&
    fixrect.x-movrect.x<movrect.width/2+fixrect.width/2&&
    movrect.y-fixrect.y<movrect.height/2+fixrect.height/2&&
    fixrect.y-movrect.y<movrect.height/2+fixrect.height/2
    ){
    movrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  else{
    movrect.shapeColor="yellow";
    fixrect.shapeColor="yellow";
  }
  drawSprites();
}