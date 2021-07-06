const enlace = document.querySelector("a");
const marco = document.querySelector("iframe");

enlace.addEventListener("click", cargarMarco);

function cargarMarco(e){ // e es un objeto
  e.preventDefault();
  console.log(e);
  marco.src = enlace.href;
}
/*
1- El usuario hace click sobre el enlace
2- Se produce un evento Click
3- El evento click es escuchado por el Listener
4- El listener ejecuta la fn callback: cargarMarco
5- Se comprueba si en la fn anterior se ejecutó un preventDefault
6- SI: termina
   NO: se ejecuta el comportamiento por defecto
*/

/*

Siempre que utilices una función como callback de un addEventListener, esa fn recibe como parámetro un objeto con información del evento ocurrido.

Dentro de addEventListener en el momento apropiado, se invoca al callback que le mandadmos
cargarMarco({.....});

preventDefault detiene el comportamiento por defecto que tiene el elemento [target] frente al evento [type]. 

*/