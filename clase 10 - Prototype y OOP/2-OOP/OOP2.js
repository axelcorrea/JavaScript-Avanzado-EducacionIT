function YoutubeCard(titulo, canal, views) {
  this.titulo = titulo;
  this.canal = canal;
  this.views = views;
  this.likes = 0;
}

YoutubeCard.prototype.reproducir = function(){
  console.log("Reproduciendo ", this.titulo);
}

const card1 = new YoutubeCard("Aprendiendo JS", "robertods", 100);
const card2 = new YoutubeCard("Aprendiendo PHP", "robertods", 200);
const card3 = new YoutubeCard("Aprendiendo React", "robertods", 300);

card1.reproducir();
/*

function new( YoutubeCard ){
  const aux = Object.create(YoutubeCard.prototype);
  YoutubeCard.call(aux, "Aprendiendo JS", "robertods", 100);
  return aux;
}

*/