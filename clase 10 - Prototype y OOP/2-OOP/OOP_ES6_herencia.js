class YoutubeCard {
  constructor(titulo, canal, views){
    this.titulo = titulo;
    this.canal = canal;
    this.views = views;
    this.likes = 0;
  }
  reproducir(){
    console.log("Reproduciendo ", this.titulo);
  }
  darLike(){
    console.log("Like a ", this.titulo);
  }
}

/*
function YoutubeCardPremium(titulo, canal, views) {
  YoutubeCard.call(this, titulo, canal, views)
  this.dislikes = 0;
}
YoutubeCardPremium.prototype = Object.create(YoutubeCard.prototype);
YoutubeCardPremium.prototype.agregaFavoritos = function(){
  console.log("Agregando a favoritos ", this.titulo);
}
*/

class YoutubeCardPremium extends YoutubeCard {
  constructor(titulo, canal, views){
    super(titulo, canal, views); // hereda los atributos de la super clase
    this.dislikes = 0;
  }
  agregaFavoritos(){
    console.log("Agregando a favoritos ", this.titulo);
  }
}


const card1 = new YoutubeCard("Batman", "dc", 258889);
const card2 = new YoutubeCardPremium("Ironman", "marvel", 34534543);