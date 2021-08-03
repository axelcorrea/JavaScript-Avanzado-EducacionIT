function YoutubeCard(titulo, canal, views) {
  this.titulo = titulo;
  this.canal = canal;
  this.views = views;
  this.likes = 0;
}
YoutubeCard.prototype.reproducir = function(){
  console.log("Reproduciendo ", this.titulo);
}
YoutubeCard.prototype.darLike = function(){
  console.log("Like a ", this.titulo);
}
//------------------------------------------------
function YoutubeCardPremium(titulo, canal, views) {
  YoutubeCard.call(this, titulo, canal, views)
  this.dislikes = 0;
}
YoutubeCardPremium.prototype = Object.create(YoutubeCard.prototype);
YoutubeCardPremium.prototype.agregaFavoritos = function(){
  console.log("Agregando a favoritos ", this.titulo);
}
//------------------------------------------------
const card1 = new YoutubeCard("Aprendiendo JS", "robertods", 100);

const card2 = new YoutubeCardPremium("Aprendiendo JS", "robertods", 100);
card2.reproducir();