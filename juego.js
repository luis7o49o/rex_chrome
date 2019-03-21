document.addEventListener('keydown', function(evento){
   if(evento.keyCode == 32){
      saltar();
   }

});

function inicializa(){
   canvas = document.getElementById('canvas');
   ctx = canvas.getContext('2d');
   cargaImagenes();
}
//BUCLE PRINCIPAL
//==================================================
var FPS = 30;
setInterval(function(){

   principal();

},1000/FPS);

function principal(){
   borraCanvas();
   gravedad();
   mov_Suelo();
   mov_Arbol();
   mov_Nube();
   dibujaSuelo();
   dibujaRex();
   dibujaArbol();
   dibujaNube();
}

function borraCanvas(){
   canvas.width = ancho;
   canvas.height = alto;
}

//ETIQUETAS  HTML
//==================================================
var ancho = 700;
var alto = 300;
var canvas, ctx;

var suelo = 250;
var trex = {y: suelo, 
            vy: 0,
            gravedad: 2,
            salto: 25,
            vymax: 9,
            saltando: false
            };
var nivel = {velocidad: 8, puntuaion: 0};
var arbol = {x: ancho+100, y: 229};
var nube = {x: 400, y: 100};
var dibujoSuelo = {x: 0, y:suelo + 10}; 

//==================================================

function cargaImagenes(){
   imgRex = new Image();
   imgRex.src = 'img/nave.jpeg';

   imgSuelo = new Image();
   imgSuelo.src = 'img/grass.jpeg';

   imgArbol = new Image();
   imgArbol.src = 'img/arbol_Animado.png';

   imgNube = new Image();
   imgNube.src = 'img/nube.png';   
}

//DIBUJAR en el CANVAS
//============================================================
function dibujaRex(){
  ctx.drawImage(imgRex,0,0,250,250,150,trex.y,50,50);
}
function dibujaSuelo(){
  ctx.drawImage(imgSuelo,dibujoSuelo.x,0,700,130,0,dibujoSuelo.y,700,30);
}
function dibujaArbol(){
  ctx.drawImage(imgArbol,0,0,640,720,arbol.x,arbol.y,38,75);

}
function dibujaNube(){
  ctx.drawImage(imgNube,0,0,255,255,nube.x,nube.y,82,31);

}
//ANIMACION DE IMAGENES
//============================================================
function mov_Nube(){
   if (nube.x < -100) {
      nube.x = ancho +100;
   }
   else {
      nube.x -=2;
   };
}

function mov_Suelo(){
   if (dibujaSuelo.x > 700) {
      dibujaSuelo.x = 0;
   }
   else {
      dibujaSuelo.x += nivel.velocidad;
   }
}

function mov_Arbol(){
   if (arbol.x < -100) {
      arbol.x = ancho +100;   
   }
   else {
      arbol.x -= nivel.velocidad;
   }
}

//============================================================
//MOVIMIENTO REX
//============================================================
function saltar(){
   trex.saltando = true;
   trex.vy = trex.salto;
   }


function gravedad(){

     if(trex.saltando){
         if(trex.y - trex.vy - trex.gravedad > suelo){
            trex.saltando = false;
            trex.vy = 0;
            trex.y = suelo;

      }else {
         trex.vy -= trex.gravedad;
         trex.y -= trex.vy;//impulso 
         }
     } 
}
//============================================================

