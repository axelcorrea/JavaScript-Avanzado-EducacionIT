const boton = document.querySelector("button");
boton.addEventListener("click", pedirLaFraseDelDia);

function pedirLaFraseDelDia(e){
  const ajax = new XMLHttpRequest();
  ajax.open('get', 'frase.txt');
  ajax.addEventListener('load', procesarRespuesta);
  ajax.send(); // enviar el request al servidor
  console.log(ajax.response);
}

function procesarRespuesta(e){
  //let respuesta = this.response; // this es el ajax
  let respuesta = e.target.response; // e.target es el ajax
  document.getElementById("caja").textContent = respuesta;
}