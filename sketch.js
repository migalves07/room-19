var cidade,menino,dinheiro,carro1,carro3;
var cidadeImg,meninoImg,dinheiroImg,carroImg,carro2Img;
var pontuacao = 0;
var carro;
var grupocarro;
var estadojogo = "jogando";
var restart;
var restarts;



function preload(){
 cidadeImg = loadImage("cidade.png");
 meninoImg = loadAnimation("jack.png");
 dinheiroImg = loadImage("coin.png");
 carroImg = loadImage("carro1.png");
 carro2Img = loadImage("carro3.png");
 restart = loadImage("restart.png");
}
function obstaculos(){
  if (frameCount%320 == 0){
    carro = createSprite(490,260,20,20);
    carro.velocityX = -2;
    var aleatorio = round(random(1,2));
    switch(aleatorio){
      case 1:carro.addImage(carroImg);
      carro.scale = 0.15
      break;
      case 2:carro.addImage(carro2Img);
      carro.scale = 0.50
      break;
      default:break;
    }
   grupocarro.add(carro);
   
  }
 
}
function setup() {
 
  createCanvas(500,300);

  cidade = createSprite(500,120);
  cidade.addImage(cidadeImg);
  cidade.velocityX = -4;
  invisibleGround = createSprite(200,240,400,10);
  invisibleGround.visible = false;
  cidade.x = cidade.width /2;
  menino = createSprite(40,260,20,50);
  menino.addAnimation("saiuCorrendo",meninoImg);
  menino.scale = 0.08;
  menino.velocityX = 0
  restarts = createSprite(50,50,10,30);
  restarts.scale = 0.4;
  restarts.addImage("carregar",restart);
  grupocarro = createGroup();
  menino.debug = true
  menino.setCollider("circle",0,0,220);
}
  

function draw(){
  background(255)
  console.log(menino.y)
  
  
  
  if(estadojogo == "jogando"){
    restarts.visible = false
     if(keyDown("space")&&menino.y>100) {
     menino.velocityY = -10;
     }
          
           
           
        
        if(cidade.x < 200){
        cidade.x = cidade.width / 2;
      }
      
    obstaculos();
     
     if(grupocarro.isTouching(menino)){
      estadojogo = "FimDeJogo"
    }
  }
  if(estadojogo == "FimDeJogo"){
  restarts.visible = true
  cidade.velocityX = 0
  menino.velocityY = 0
  grupocarro.setVelocityXEach(0)

  }
  if(mousePressedOver(restarts)){
    pontuacao = 0;
    grupocarro.destroyEach()
    estadojogo = "jogando"
    console.log(estadojogo)
    cidade.x = cidade.width /2;
    cidade.velocityX = -3;
  }
  if(grupocarro.isTouching(menino)){
    menino.velocityY = 0;
  }

text(pontuacao,300,150);
menino.collide(invisibleGround);
drawSprites();


}



