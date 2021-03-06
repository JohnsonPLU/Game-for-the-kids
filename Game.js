var theButton = function(){
fill(255, 250, 0);
  rect(900,600,200,100);
  fill(0,0,0);
  textSize(25);
  text("Start!",950,650);
};

var PLAYER_MOVE_SPEED = 1;

var xPos = 245;
var yPos = 200;


function setup() {
  createCanvas(1250,900);
  background(160, 115, 56);
  
theButton();
};

mouseClicked = function(){
  if(mouseX > 900 && mouseX < 900 + 200
  && mouseY > 600 && mouseY < 700){
  background(0,206,255);
  fill(0,216,0);
  noStroke();
  rect(0,700,1250,200);
  fill(255,255,0);
  ellipse(1220,50,200,200);
  stroke(0,0,0);
  strokeWeight(1);
  rect(220,220,1,400);
  rect(220,620,350,1);
  rect(595,620,25,1);
  rect(620,220,1,400);
  rect(255,220,365,1);
  rect(220,220,10,1);
  rect(420,220,1,375);
  rect(220,420,165,1);
  rect(410,420,10,1);
  rect(320,220,1,80);
  rect(320,325,1,95);
  rect(320,260,20,1);
  rect(365,260,55,1);
  rect(365,260,1,-20);
  rect(366,240,40,1);
  rect(390,300,30,1);
  rect(390,300,1,30);
  rect(391,330,-21,1);
  rect(370,330,1,-50);
  rect(370,280,35,1);
  rect(340,220,1,25);
  rect(320,325,20,1);
  rect(220,325,40,1);
  rect(260,325,1,40);
  rect(260,365,5,1);
  rect(290,365,30,1);
  rect(220,385,70,1);
  rect(290,365,1,5);
  rect(315,385,5,1);
  rect(270,405,1,15);
  rect(270,405,30,1);
  rect(270,250,50,1);
  rect(240,420,9,1);
  rect(250,280,70,1);
  rect(220,280,5,1);
  rect(250,280,1,15);
  rect(220,315,31,1);
  rect(320,325,31,1);
  rect(420,350,-65,1);
  rect(330,325,1,26);
  rect(370,450,50,1);
  rect(345,500,1,-78)
  rect(420,530,-150,1);
  rect(346,500,-50,1);
  rect(220,515,50,1);
  rect(250,515,50,1);
  fill(0,0,0);
  text("-W=Up",10,20,5);
text("-S=Down",10,100,5);
text("-D=Right",10,140,5);
text("-A=Left",10,60,5);
text("-Q=Stop",10,180,5);
  //character temporary replacement
 
  }
};
var movePlayerDown = function(){
  yPos += PLAYER_MOVE_SPEED;
}
var movePlayerRight = function(){
  xPos += PLAYER_MOVE_SPEED;
}
var movePlayerUp = function(){
  yPos -= PLAYER_MOVE_SPEED;
}
var movePlayerLeft = function(){
  xPos -= PLAYER_MOVE_SPEED;
}
var stopMovement = function(){
  xPos = xPos;
  yPos = yPos;
}
 
function draw() {
//preferably a keycode for this but using the mouse for now since it doesn't work
  if(keyIsPressed){

    if(keyCode == 83){
      background(0,206,255);
      fill(0,216,0);
  noStroke();
  rect(0,700,1250,200);
  fill(255,255,0);
  ellipse(1220,50,200,200);
  stroke(0,0,0);
  strokeWeight(1);
  rect(220,220,1,400);
  rect(220,620,350,1);
  rect(595,620,25,1);
  rect(620,220,1,400);
  rect(255,220,365,1);
  rect(220,220,10,1);
  rect(420,220,1,375);
  rect(220,420,165,1);
  rect(410,420,10,1);
  rect(320,220,1,80);
  rect(320,325,1,95);
  rect(320,260,20,1);
  rect(365,260,55,1);
  rect(365,260,1,-20);
  rect(366,240,40,1);
  rect(390,300,30,1);
  rect(390,300,1,30);
  rect(391,330,-21,1);
  rect(370,330,1,-50);
  rect(370,280,35,1);
  rect(340,220,1,25);
  rect(320,325,20,1);
  rect(220,325,40,1);
  rect(260,325,1,40);
  rect(260,365,5,1);
  rect(290,365,30,1);
  rect(220,385,70,1);
  rect(290,365,1,5);
  rect(315,385,5,1);
  rect(270,405,1,15);
  rect(270,405,30,1);
  rect(270,250,50,1);
  rect(240,420,9,1);
  rect(250,280,70,1);
  rect(220,280,5,1);
  rect(250,280,1,15);
  rect(220,315,31,1);
  rect(320,325,31,1);
  rect(420,350,-65,1);
  rect(330,325,1,26);
  rect(370,450,50,1);
  rect(345,500,1,-78)
  rect(420,530,-150,1);
  rect(346,500,-50,1);
  rect(220,515,50,1);
  rect(250,515,50,1);
 fill(0,0,0);
  text("-W=Up",10,20,5);
text("-S=Down",10,100,5);
text("-D=Right",10,140,5);
text("-A=Left",10,60,5);
text("-Q=Stop",10,180,5);

//moving the character
      movePlayerDown();
     
  }
  if (keyCode == 68){
   background(0,206,255);
      fill(0,216,0);
  noStroke();
  rect(0,700,1250,200);
  fill(255,255,0);
  ellipse(1220,50,200,200);
  stroke(0,0,0);
  strokeWeight(1);
  rect(220,220,1,400);
  rect(220,620,350,1);
  rect(595,620,25,1);
  rect(620,220,1,400);
  rect(255,220,365,1);
  rect(220,220,10,1);
  rect(420,220,1,375);
  rect(220,420,165,1);
  rect(410,420,10,1);
  rect(320,220,1,80);
  rect(320,325,1,95);
  rect(320,260,20,1);
  rect(365,260,55,1);
  rect(365,260,1,-20);
  rect(366,240,40,1);
  rect(390,300,30,1);
  rect(390,300,1,30);
  rect(391,330,-21,1);
  rect(370,330,1,-50);
  rect(370,280,35,1);
  rect(340,220,1,25);
  rect(320,325,20,1);
  rect(220,325,40,1);
  rect(260,325,1,40);
  rect(260,365,5,1);
  rect(290,365,30,1);
  rect(220,385,70,1);
  rect(290,365,1,5);
  rect(315,385,5,1);
  rect(270,405,1,15);
  rect(270,405,30,1);
  rect(270,250,50,1);
  rect(240,420,9,1);
  rect(250,280,70,1);
  rect(220,280,5,1);
  rect(250,280,1,15);
  rect(220,315,31,1);
  rect(320,325,31,1);
  rect(420,350,-65,1);
  rect(330,325,1,26);
  rect(370,450,50,1);
  rect(345,500,1,-78)
  rect(420,530,-150,1);
  rect(346,500,-50,1);
  rect(220,515,50,1);
  rect(250,515,50,1);
 fill(0,0,0);
  text("-W=Up",10,20,5);
text("-S=Down",10,100,5);
text("-D=Right",10,140,5);
text("-A=Left",10,60,5);
text("-Q=Stop",10,180,5);
 

//moving the character
      movePlayerRight();
  }
  if(keyCode == 87){
      background(0,206,255);
      fill(0,216,0);
  noStroke();
  rect(0,700,1250,200);
  fill(255,255,0);
  ellipse(1220,50,200,200);
  stroke(0,0,0);
  strokeWeight(1);
  rect(220,220,1,400);
  rect(220,620,350,1);
  rect(595,620,25,1);
  rect(620,220,1,400);
  rect(255,220,365,1);
  rect(220,220,10,1);
  rect(420,220,1,375);
  rect(220,420,165,1);
  rect(410,420,10,1);
  rect(320,220,1,80);
  rect(320,325,1,95);
  rect(320,260,20,1);
  rect(365,260,55,1);
  rect(365,260,1,-20);
  rect(366,240,40,1);
  rect(390,300,30,1);
  rect(390,300,1,30);
  rect(391,330,-21,1);
  rect(370,330,1,-50);
  rect(370,280,35,1);
  rect(340,220,1,25);
  rect(320,325,20,1);
  rect(220,325,40,1);
  rect(260,325,1,40);
  rect(260,365,5,1);
  rect(290,365,30,1);
  rect(220,385,70,1);
  rect(290,365,1,5);
  rect(315,385,5,1);
  rect(270,405,1,15);
  rect(270,405,30,1);
  rect(270,250,50,1);
  rect(240,420,9,1);
  rect(250,280,70,1);
  rect(220,280,5,1);
  rect(250,280,1,15);
  rect(220,315,31,1);
  rect(320,325,31,1);
  rect(420,350,-65,1);
  rect(330,325,1,26);
  rect(370,450,50,1);
  rect(345,500,1,-78)
  rect(420,530,-150,1);
  rect(346,500,-50,1);
  rect(220,515,50,1);
  rect(250,515,50,1);
 fill(0,0,0);
  text("-W=Up",10,20,5);
text("-S=Down",10,100,5);
text("-D=Right",10,140,5);
text("-A=Left",10,60,5);
text("-Q=Stop",10,180,5);
 

//moving the character
      movePlayerUp();
  }
  if(keyCode == 65){
      background(0,206,255);
      fill(0,216,0);
  noStroke();
  rect(0,700,1250,200);
  fill(255,255,0);
  ellipse(1220,50,200,200);
  stroke(0,0,0);
  strokeWeight(1);
  rect(220,220,1,400);
  rect(220,620,350,1);
  rect(595,620,25,1);
  rect(620,220,1,400);
  rect(255,220,365,1);
  rect(220,220,10,1);
  rect(420,220,1,375);
  rect(220,420,165,1);
  rect(410,420,10,1);
  rect(320,220,1,80);
  rect(320,325,1,95);
  rect(320,260,20,1);
  rect(365,260,55,1);
  rect(365,260,1,-20);
  rect(366,240,40,1);
  rect(390,300,30,1);
  rect(390,300,1,30);
  rect(391,330,-21,1);
  rect(370,330,1,-50);
  rect(370,280,35,1);
  rect(340,220,1,25);
  rect(320,325,20,1);
  rect(220,325,40,1);
  rect(260,325,1,40);
  rect(260,365,5,1);
  rect(290,365,30,1);
  rect(220,385,70,1);
  rect(290,365,1,5);
  rect(315,385,5,1);
  rect(270,405,1,15);
  rect(270,405,30,1);
  rect(270,250,50,1);
  rect(240,420,9,1);
  rect(250,280,70,1);
  rect(220,280,5,1);
  rect(250,280,1,15);
  rect(220,315,31,1);
  rect(320,325,31,1);
  rect(420,350,-65,1);
  rect(330,325,1,26);
  rect(370,450,50,1);
  rect(345,500,1,-78)
  rect(420,530,-150,1);
  rect(346,500,-50,1);
  rect(220,515,50,1);
  rect(250,515,50,1);
 fill(0,0,0);
  text("-W=Up",10,20,5);
text("-S=Down",10,100,5);
text("-D=Right",10,140,5);
text("-A=Left",10,60,5);
text("-Q=Stop",10,180,5);
 

//moving the character
      movePlayerLeft();
  }
  if(keyCode == 81){
    stopMovement();
  }
  if(xPos > 220 && xPos < 220 + 2
  && yPos > 220 && yPos < 220+400){
    xPos = 240;
    yPos = 200;
    
  }
      }
  noStroke();
   fill(255, 0, 239);
ellipse(xPos,yPos,10,10);



};
