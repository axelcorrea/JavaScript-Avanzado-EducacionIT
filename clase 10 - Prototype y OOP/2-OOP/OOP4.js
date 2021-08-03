function YoutubeCard(titulo, canal, views) {
  'use strict';
  this.titulo = titulo;
  this.canal = canal;
  this.views = views;
  this.likes = 0;
}
Object.defineProperties(YoutubeCard.prototype, {
  reproducir: { value: function(){
    console.log("Reproduciendo ", this.titulo);
  }},
  darLike: { value: function(){
    console.log("Like a ", this.titulo);
  }}
});
//------------------------------------------------
function YoutubeCardPremium(titulo, canal, views) {
  'use strict';
  YoutubeCard.call(this, titulo, canal, views)
  this.dislikes = 0;
}
YoutubeCardPremium.prototype = Object.create(YoutubeCard.prototype, {
  agregaFavoritos: { value: function(){
    console.log("Agregando a favoritos ", this.titulo);
  }}
});
//------------------------------------------------
const card1 = new YoutubeCard("Aprendiendo JS", "robertods", 100);

const card2 = new YoutubeCardPremium("Aprendiendo JS", "robertods", 100);
card2.reproducir();