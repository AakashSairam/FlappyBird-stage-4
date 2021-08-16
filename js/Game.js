class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  
    bird1 = createSprite(150,displayHeight/2,20,20);
    bird2 = createSprite(150,displayHeight/2,20,20);
    bird1.debug= false;
    bird1.addImage("player1",birdImg);
    bird2.addImage("player2",birdImg);
    bird = [bird1,bird2];
  bird1.scale= 0.2;
  bird2.scale= 0.2;
  x2 = displayWidth;
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //image(bg,0,0,displayWidth,displayHeight-170);
    //bg.resize(displayWidth,displayHeight-100);
   
   // console.log(bg.x)
    if(allPlayers !== undefined){
      image(bgImg,x1,0,displayWidth,displayHeight);
      image(bgImg,x2,0,displayWidth,displayHeight);
      
      x1 -= 3;
  x2 -= 3;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
    //  if (bg.x<1700){
      //  bg.x = 1400/2; 
      // }
    }
    if(bird1.isTouching(pipe_group)&&bird2.isTouching(pipe_group)){
      gameState = 2;
    }
    if(player.score > 1000){
      gameState = 2;
    }
    if(keyIsDown(UP_ARROW)){
      player.score +=5;
      bird1.velocityY = -10;
      bird2.velocityY = -10;
      player.update();
    }
    bird1.velocityY = bird1.velocityY+0.5;
    bird2.velocityY = bird2.velocityY+0.5;
    if (frameCount%40 === 0){  
   
      pipe = createSprite(580,250,20,5);
      var randompipe = Math.round(random(1,4));
      // switch is used randomize many images 
        switch(randompipe){
          case 1:pipe.addImage(pipe1Img);
         break;
         case 2:pipe.addImage(pipe2Img);
            break;
            case 3:pipe.addImage(pipe3Img);
            break;
            case 4:pipe.addImage(pipe4Img);
            break;
        }
        pipe.lifetime = 100;
        pipe.scale = 1.75;
    // tree.setCollider("rectangle",0,0,300,150);
    //   tree.debug = true;
        pipe.velocityX = -9;
        pipe_group.add(pipe);
      }
    drawSprites();
  }
  

  end(){
    console.log("Game Ended");
  }
}
