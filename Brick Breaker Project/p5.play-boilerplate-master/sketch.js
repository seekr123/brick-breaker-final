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
var brickState=1;
var vhbrick1State=3;
var vhbrick2State=3;
var hbrick1State=2;
var hbrick2State=2;
var edges;
var brick3img,brick2img,brick1img,hbrick1img,hbrick2img,vhbrick1img,vhbrick2img,mbrickimg;
var score=0;
var lives=3;
var brickbounce,gameend,gamestart,lifeloss,paddlebounce;

function preload(){
 
  ballimg=loadImage('images/hammer.png');
  ballAnimation=loadAnimation('images/hammer.png','images/hammer1.png','images/hammer2.png','images/hammer3.png');
  brick1img=loadImage('images/brick.png');
  hbrick1img=loadImage('images/hbrick.png');
  vhbrick1img=loadImage('images/vhbrick.png');
  mbrickimg=loadImage('images/mbrick.png');
  paddleimg=loadImage('images/paddle.png');
  brickbounce=loadSound('sounds/brickbounce.mp3');
  gameend=loadSound('sounds/gameend.mp3');
  gamestart=loadSound('sounds/gamestart.mp3');
  lifeloss=loadSound('sounds/lifeloss.mp3');
  paddlebounce=loadSound('sounds/paddlebounce.mp3');


}

function setup() {
  

  createCanvas(displayWidth,displayHeight);

  paddle=createSprite(displayWidth/55,displayHeight/2,25,115);
  paddle.debug=true;
  paddle.setCollider('rectangle',0,0,25,displayHeight/2.38);

  ball=createSprite(displayWidth/28.9,displayHeight/2,10,10);
  ball.addImage(ballimg);
  ball.addAnimation('1',ballAnimation);
  ball.scale=0.25;
  ball.debug=true;
  ball.setCollider('circle',0,0,50);
  
  for(var i=65;i<displayHeight-40;i+=110){
    vhbrick1.push([new Brick(displayWidth-40,i,'white',vhbrick1img,hbrick1img,brick1img),3])
  }
  for(var i=120;i<displayHeight-40;i+=110){
    vhbrick2.push([new Brick(displayWidth-120,i,'white',vhbrick1img,hbrick1img,brick1img),3])
  }
  for(var i=175;i<displayHeight-80;i+=110){
    hbrick1.push([new Brick(displayWidth-200,i,'lightBlue',hbrick1img,brick1img,vhbrick1img),2])
  }
  for(var i=230;i<displayHeight-100;i+=110){
    hbrick2.push([new Brick(displayWidth-280,i,'lightBlue',hbrick1img,brick1img,vhbrick1img),2])
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
    gamestart.play();
  }
  if(keyDown(32)&&gameState===0){
    ball.changeAnimation('1',ballAnimation);
    ball.velocityX=20;
    ball.velocityY=random(-5,5);
    gameState=1;
    gamestart.stop();
    
    //stop game sound
    
  }
  

  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y+10;
  }
  if(keyDown(DOWN_ARROW)){
    paddle.y=paddle.y-10;
  }
  
   paddle.addImage(paddleimg);
   paddle.scale=0.5


  if (ball.isTouching(paddle)){
      ball.bounceOff(paddle);
      paddlebounce.play();
      //ball.velocityX=(2,6);
      //ball.velocityY=(2,6);
    
  }
  
  
  for(var i=0;i<vhbrick1.length;i++){
     
    if(detectCollision(ball,vhbrick1[i][0])){     
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      switch( vhbrick1[i][1])
     {
       case 3: vhbrick1[i][0].changeImage("img",hbrick1img);
       vhbrick1[i][1]-=1;
       vhbrick1.splice(i,0,[vhbrick1[i][0],  vhbrick1[i][1]]);
       vhbrick1.pop();
       score=score+10;
             
              break;
       case 2:vhbrick1[i][0].changeImage("img",brick1img);
       vhbrick1[i][1]-=1;
       vhbrick1.splice(i,0,[vhbrick1[i][0],   vhbrick1[i][1]]);
       vhbrick1.pop();
       score=score+10;
        
              break;
      case 1:vhbrick1[i][0].destroy();
      vhbrick1.splice(vhbrick1[i],1);
      i--;
      score=score+10;
             break;
     }
   

    }
  }
  for(var i=0;i<vhbrick2.length;i++){
     
    if(detectCollision(ball,vhbrick2[i][0])){     
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      switch( vhbrick2[i][1])
     {
       case 3: vhbrick2[i][0].changeImage("img",hbrick1img);
       vhbrick2[i][1]-=1;
       vhbrick2.splice(i,0,[vhbrick2[i][0],  vhbrick2[i][1]]);
       vhbrick2.pop();
       score=score+10;
              //brick3.pop();
            //i--
              break;
       case 2:vhbrick2[i][0].changeImage("img",brick1img);
       vhbrick2[i][1]-=1;
       vhbrick2.splice(i,0,[vhbrick2[i][0],   vhbrick2[i][1]]);
       vhbrick2.pop();
       score=score+10;
            // i--
              break;
      case 1:vhbrick2[i][0].destroy();
      vhbrick1.splice(vhbrick2[i],1);
      i--;
      score=score+10;
      
             break;
     }
    }
  }
  for(var i=0;i<hbrick1.length;i++){
     
    if(detectCollision(ball,hbrick1[i][0])){      
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      switch( hbrick1[i][1])
      {
        case 3: hbrick1[i][0].changeImage("img",brick1img);
        hbrick1[i][1]-=1;
        hbrick1.splice(i,0,[hbrick1[i][0],  hbrick1[i][1]]);
        hbrick1.pop();
        score=score+10;
               //brick3.pop();
             //i--
               break;
        case 2:hbrick1[i][0].changeImage("img",brick1img);
        hbrick1[i][1]-=1;
        hbrick1.splice(i,0,[hbrick1[i][0],   hbrick1[i][1]]);
        hbrick1.pop();
        score=score+10;
             // i--
               break;
       case 1:hbrick1[i][0].destroy();
       hbrick1.splice(hbrick1[i],1);
       i--;
       score=score+10;
              break;
      }
    }
  }
  for(var i=0;i<hbrick2.length;i++){
     
    if(detectCollision(ball,hbrick2[i][0])){      
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      switch( hbrick2[i][1])
      {
        case 3: hbrick2[i][0].changeImage("img",hbrick1img);
        hbrick2[i][1]-=1;
        hbrick2.splice(i,0,[hbrick2[i][0],  hbrick2[i][1]]);
        hbrick2.pop();
        score=score+10;
               //brick3.pop();
             //i--
               break;
        case 2:hbrick2[i][0].changeImage("img",brick1img);
        hbrick2[i][1]-=1;
        hbrick2.splice(i,0,[hbrick2[i][0],   hbrick2[i][1]]);
        hbrick2.pop();
        score=score+10;
             // i--
               break;
       case 1:hbrick2[i][0].destroy();
       hbrick2.splice(hbrick2[i],1);
       i--
       score=score+10;
              break;
      }
      
    }
  }
  for(var i=0;i<brick1.length;i++){
     
    if(detectCollision(ball,brick1[i])){      
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      brick1[i].destroy();
      brick1.splice(brick1[i],1);
      score=score+10;
      i--;

    }
  }
  for(var i=0;i<brick2.length;i++){
     
    if(detectCollision(ball,brick2[i])){      
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      brick2[i].destroy();
      brick2.splice(brick2[i],1);
      score=score+10;
      i--;

    }
  }  
  for(var i=0;i<brick3.length;i++){
     
    if(detectCollision(ball,brick3[i])){      
      ball.velocityX=random(-8,-12);
      ball.velocityY=random(-8,-12);
      brick3[i].destroy();
      brick3.splice(brick3[i],1);           
    }
  }


  edges=createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  
  fill('black');
  textSize(36);
  text('score: '+score,displayWidth/1.8,displayHeight/18);
  



  drawSprites();
}

function detectCollision(iball,ibrick){
  
  var distance=dist(iball.x,iball.y,ibrick.body.x,ibrick.body.y);
 // console.log(distance+" distance");
  //console.log(ibrick.body.width+iball.width +" width");
  if (iball.x-ibrick.body.x<ibrick.body.width/2+iball.width/2
    && iball.y-ibrick.body.y<ibrick.body.height/2+iball.height/2
    && ibrick.body.y-iball.y<ibrick.body.height/2+iball.height/2
    && ibrick.body.x-iball.x<ibrick.body.width/2+iball.width/2){
      brickbounce.play();
    //console.log("in true")
    return true; 
    
  }
  else{

    return false;
  }
}
