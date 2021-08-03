/*
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
*/

// ES6
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

const card1 = new YoutubeCard("Batman", "dc", 258889);