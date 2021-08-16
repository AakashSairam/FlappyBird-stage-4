var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var score = 0;
var database;

var form, player, game;
var birdImg;
var pipe1Img,pipe2Img,pipe3Img,pipe4Img;
var bgImg,bg;
var bird1 ,bird2;
var pipe;
var bird=[]
var x1 = 0;
var x2;

function preload(){
   birdImg = loadImage("sprites/bird.png");
   bgImg = loadImage("sprites/bg2.jpg");
   pipe1Img = loadImage("sprites/pipes-1.png");
   pipe2Img = loadImage("sprites/pipes-2.png");
   pipe3Img = loadImage("sprites/pipes-3.png");
   pipe4Img = loadImage("sprites/pipes-4.png");
   pipe_group = new Group();
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-170);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}