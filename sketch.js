var cat1,cat2,cat3,cat4,garden,mouse1,mouse2,mouse3,mouse4,cat,mouse;
function preload() {
  cat1=loadImage("images/cat1.png"); 
  cat4=loadImage("images/cat4.png"); 
  cat3=loadImage("images/cat3.png"); 
  cat2=loadImage("images/cat2.png"); 
  mouse1=loadImage("images/mouse1.png");
  mouse2=loadImage("images/mouse2.png");
  mouse3=loadImage("images/mouse3.png");
  mouse4=loadImage("images/mouse4.png");
  garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
        cat=createSprite(850,600,50,50);
        cat.addAnimation("catSleeping",cat1);
        cat.scale=0.2;
        

        mouse=createSprite(200,600,50,50);
        mouse.addAnimation("mouseSleeping",mouse1);
        mouse.scale=0.2;


}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2+mouse.width/2){
      cat.velocityX = 0;
      cat.changeAnimation("catim",cat3);
      mouse.changeAnimation("jerryim",mouse3);
    }
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning",cat2);
    mouse.addAnimation("mouseteasing",mouse2);
  }
  //For moving and changing animation write code here


}
