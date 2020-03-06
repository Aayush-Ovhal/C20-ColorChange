
var color;

function setup(){
 createCanvas(1200,800);

 color = 0;
}

function draw(){
background(color);

ellipse(mouseX,mouseY,70,70);

color = map(mouseX,0,1200,20,255);

drawSprites();
}
