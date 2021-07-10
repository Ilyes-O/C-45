const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var engine, world
var s1, s2

var form, player, game;
var s1_dead, s1_shooting, s2_dead, s2_shooting;
var jet1,jet1Img,jet2,jet2Img,heli.png;

function preload(){
  bg = loadImage("images/sky.jpg");
  s1_shooting = loadImage("images/shooting_1.png");
  s1_dead = loadImage("images/destroyed_1.png");
  s2_shooting = loadImage("images/shooting_2.png");
  s2_dead = loadImage("images/falling_2.png");
}
function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  s1 = createSprite(200,450);
  s1.addImage(s1_shooting);
  
 
}


function draw(){
  background(bg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    
  }
}
