const Engine = Matter.Engine;
const World = Matter.World;
Matter.Bodies;const Constraint = Matter.Constraint;
var engine,world,backgroungImg

function preload(){
alface  = loadImage("assets/alface.webp")
amexa = loadImage ("assets/amexa.png")
boca = loadImage("assets/boca.png")
cookie = loadImage ("assets/cookie.webp")
frango = loadImage ("assets/frango.png")
jaca = loadImage ("assets/jaca.png")
kiwi = loadImage ("assets/kiwi.png")
pizza =loadImage ("assets/pizza.png")
bolo = loadImage ("assets/bolo.png")//
cozinha = loadImage ("assets/cozinha.webp")//

}



function setup () {
    createCanvas(1000,500);
var alface1 = createSprite(500,10,10,10)
var amexa2 = createSprite (200,10,10,10)
var boca3 = createSprite (100,10,10,10)
var cookie5 = createSprite (600,10,10,10)
var frango6 = createSprite (700,10,10,10)
var kiwi7 = createSprite (230,10,10,10)
var pizza8 = createSprite (300,10,10,10)
var bolo9 = createSprite (150,10,10,10)
 var jaca11 = createSprite (350,10,10,30)
alface1.addImage(alface)
amexa2.addImage (amexa)
boca3.addImage (boca)
cookie5.addImage (cookie)
frango6.addImage (frango)
jaca11.addImage (jaca)
kiwi7.addImage (kiwi)
pizza8.addImage (pizza)
bolo9.addImage (bolo)
boca3.scale = 35
alface1.scale = 0.3
frango6.scale = 0.3
pizza8.scale = 0.2
cookie5.scale = 0.3
jaca11.scale=0.3
kiwi7.scale= 0.3
bolo9.scale= 0.3



}

function draw  () {
    background("cozinha")
    drawSprites()
}
