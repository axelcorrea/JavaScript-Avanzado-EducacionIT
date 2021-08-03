// Función constructora
function YoutubeCard(titulo, canal, views) {
  this.titulo = titulo;
  this.canal = canal;
  this.views = views;
  this.likes = 0;
  this.reproducir = function(){
    console.log("Reproduciendo ", this.titulo);
  }
  // return undefined;
}

const card1 = new YoutubeCard("Aprendiendo JS", "robertods", 100);
const card2 = new YoutubeCard("Aprendiendo PHP", "robertods", 200);
const card3 = new YoutubeCard("Aprendiendo React", "robertods", 300);

console.log(card1, card2, card3);

card2.reproducir();
card3.reproducir();

/*

function new( YoutubeCard ){
  const aux = {};
  YoutubeCard.call(aux, "Aprendiendo JS", "robertods", 100);
  return aux;
}

*/