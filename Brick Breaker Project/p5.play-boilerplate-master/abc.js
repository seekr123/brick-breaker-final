var vhbrick1=[];
var hbrick1=[];
var brick1=[];
var vhbrick2=[]
var hbrick2=[];
var brick2=[];
var brick3=[];
var mbrick,mbrickFrame=0;
var paddle,ball,ballimg,paddleimg,ballAnimation;
var gameState=0;
var brickState=3;
var vhbrickState=3;
var hbrickState=2;
var edges;
var brick3img,brick2img,brick1img,hbrick1img,hbrick2img,vhbrick1img,vhbrick2img,mbrickimg;


function preload(){
 
  ballimg=loadImage('images/hammer.png');
  ballAnimation=loadAnimation('images/hammer.png','images/hammer1.png','images/hammer2.png','images/hammer3.png');
  brick1img=loadImage('images/brick.png');
  hbrick1img=loadImage('images/hbrick.png');
   vhbrick1img=loadImage('images/vhbrick.png');

  mbrickimg=loadImage('images/mbrick.png');


}

function setup() {
  

  createCanvas(displayWidth,displayHeight);

  paddle=createSprite(displayWidth/21,displayHeight/2,25,90);

  ball=createSprite(displayWidth/12,displayHeight/2,10,10);
  ball.addImage(ballimg);
  ball.addAnimation('1',ballAnimation);
  ball.scale=0.4;
  ball.debug=true;
  ball.setCollider('circle',0,0,20);
  
  for(var i=65;i<displayHeight-40;i+=110){
    vhbrick1.push(new Brick(displayWidth-40,i,'white',vhbrick1img,hbrick1img,brick1img))
  }
  for(var i=120;i<displayHeight-40;i+=110){
    vhbrick2.push(new Brick(displayWidth-120,i,'white',vhbrick1img,hbrick1img,brick1img))
  }
  for(var i=175;i<displayHeight-80;i+=110){
    hbrick1.push(new Brick(displayWidth-200,i,'lightBlue',hbrick1img,brick1img,vhbrick1img))
  }
  for(var i=230;i<displayHeight-100;i+=110){
    hbrick2.push(new Brick(displayWidth-280,i,'lightBlue',hbrick1img,brick1img,vhbrick1img))
  }
  for(var i=285;i<displayHeight-180;i+=110){
    brick1.push(new Brick(displayWidth-360,i,'orange',brick1img,vhbrick1img,hbrick1img))
  }
  for(var i=340;i<displayHeight-220;i+=110){
    brick2.push(new Brick(displayWidth-440,i,'orange',brick1img,vhbrick1img,hbrick1img))
  }
  for(var i=395;i<displayHeight-280;i+=110){
    brick3.push(new Brick(displayWidth-520,i,'orange',brick1img,vhbrick1img,hbrick1img))
  }
  

 
  
  
 
  
}

function draw() {
  background(180);  

  if(frameCount%100===0){
    mbrick=new Brick(random(displayWidth/2,displayWidth/3),random(0,displayHeight),'red',mbrickimg);

    mbrickFrame=frameCount;
    
    
 
  }

 

  
  
  if(mbrickFrame+50===frameCount&&mbrick){
    mbrick.destroy();
  }
  if(gameState===0){
    ball.addImage(ballimg);
  }
  if(keyDown(32)&&gameState===0){
    ball.changeAnimation('1',ballAnimation);
    ball.velocityX=4;
    gameState=1;
    
  }

  if(keyDown(DOWN_ARROW)){
    paddle.y=paddle.y+10;
  }
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y-10;
  }
  



  if (ball.isTouching(paddle)){
      ball.bounceOff(paddle);
      ball.velocityX=(2,6);
      ball.velocityY=(2,6)
    
  }
  
  
  for(var i=0;i<vhbrick1.length;i++){
     var vhBrick1State=2;
    if(detectCollision(ball,vhbrick1[i])){     
      
      if(vhBrick1State===2){
        vhbrick1[i].changeImage("img1",hbrick1img);
        vhBrick1State-=1;
      }
      else if(vhBrick1State===1){
        vhbrick1[i].changeImage("img2",brick1img);
        vhBrick1State-=1;
      }
      else{
        vhbrick1[i].destroy(); 
        vhbrick1.splice(vhbrick1[i],1);
        i--;
  
      }
    
      ball.velocityX=random(-2,-6);
      ball.velocityY=random(-2,-6);
     // console.log(detectCollision(ball,vhb-2,-6
      //console.log(vhbrickState);
   
      
      // console.log(vhbrickState);
     
    }
  }
  for(var i=0;i<vhbrick2.length;i++){
     
    if(detectCollision(ball,vhbrick2[i])){    
      vhbrick2[i].destroy();  
      ball.velocityX=random(-2,-6);
      ball.velocityY=random(-2,-6);
      //console.log(detectCollision(ball,vhbrick2[i]));
     // vhbrickState-=1;
     // console.log(vhbrickState);
     
      
     // console.log(vhbrickState);
     vhbrick2.splice(vhbrick2[i],1);
     i--;

    }
  }
  for(var i=0;i<hbrick1.length;i++){
    var hBrick1State=2;
    if(detectCollision(ball,hbrick1[i])){    
    
      hbrick1[i].destroy();  
      ball.velocityX=random(-2,-6);
      ball.velocityY=random(-2,-6);
     // console.log(detectCollision(ball,hbrick1[i]));
      //vhbrickState-=1;
     // console.log(vhbrickState);
    
      
     // console.log(vhbrickState);
     hbrick1.splice(hbrick1[i],1);
     i--;

    }
  }

  for(var i=0;i<hbrick2.length;i++){
     
    if(detectCollision(ball,hbrick2[i])){   
      hbrick2[i].destroy();   
     ball.velocityX=random(-2,-6);
     
      ball.velocityY=random(-2,-6);
     // console.log(detectCollision(ball,hbrick2[i]));
     // vhbrickState-=1;
     // console.log(vhbrickState);
    
     hbrick2.splice(hbrick2[i],1);
     i--;
    }
  }
  //console.log(brick1.length)
 for(var i=0;i<brick1.length;i++){
    //console.log("brick1 "+detectCollision(ball,brick1[i]))
    if(detectCollision(ball,brick1[i])){     
    
     ball.velocityX=random(-2,-6);
     ball.velocityY=random(-2,-6);
    
      brick1[i].destroy();
      
     // console.log(vhbrickState);
    brick1.splice(brick1[i],1);
    i--;
    

    }
  }

  for(var i=0;i<brick2.length;i++){

    if(detectCollision(ball,brick2[i])){      
     // console.log("brick2 "+i)
        ball.velocityX=random(-2,-6);
        ball.velocityY=random(-2,-6);
     // console.log(detectCollision(ball,brick2[i]));
        brick2[i].destroy();
        brick2.splice(brick2[i],1);
        i--;
     // console.log(brickState);

    }
  
  }  
 // console.log(brick3.length)
   for(var i=0;i<brick3.length;i++){
  // console.log("brick3 "+ detectCollision(ball,brick3[i]))
  console.log(brickState)
    if(detectCollision(ball,brick3[i])){     
     
     ball.velocityX=random(-2,-6);
     ball.velocityY=random(-2,-6);
     switch(brickState)
     {
       case 3: brick3[i].changeImage("img",vhbrick1img);
               brickState-=1;
              break;
       case 2:brick3[i].changeImage("img",hbrick1img);
              brickState-=1;
              break;
      case 1:brick3[i].destroy();
             brick3.splice(brick3[i],1);
             break;
     }
     
   /*  if(brickState===3){
      brick3[i].changeImage("img1",vhbrick1img);
      brickState-=1;
     }
   else if(brickState===2){
      brick3[i].changeImage("img1",hbrick1img);
      brickState-=1;
     }
     if (brickState===1){
      brick3[i].destroy();
      brick3.splice(brick3[i],1);
      }*/
    
      
    //  console.log(brickState);
      

    }

  }


  

  edges=createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);



  drawSprites();
}

function detectCollision(iball,ibrick){
  
  //var distance=dist(iball.x,iball.y,ibrick.body.x,ibrick.body.y);
  //console.log(iball.x+" "+iball.y+" "+ibrick.body.x+" "+ibrick.body.y);
// console.log(dist(iball.x,iball.y,ibrick.body.x,ibrick.body.y) +" width");
  if (iball.x-ibrick.body.x<ibrick.body.width/2+iball.width/2
    && iball.y-ibrick.body.y<ibrick.body.height/2+iball.height/2
    && ibrick.body.y-iball.y<ibrick.body.height/2+iball.height/2
    && ibrick.body.x-iball.x<ibrick.body.width/2+iball.width/2){
    //console.log("in true")
    return true; 
    
  }
  else{

    return false;
  }
  
}
