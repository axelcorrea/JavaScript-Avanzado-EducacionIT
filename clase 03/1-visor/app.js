let enlaces = document.querySelectorAll("a");

enlaces.forEach( a => a.addEventListener("click", modificarMarco) );

// callback
function modificarMarco(evento){
  evento.preventDefault();
  console.log("evento.target", evento.target);
  console.log("this", this);
  let enlaceClickeado = evento.target;
  document.querySelector("iframe").src = enlaceClickeado.href;
}

// modificarMarco({...});