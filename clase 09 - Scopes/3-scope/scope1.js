var objx = {};
objx.precision = 9;

// GLOBALES =========================================
// window = {...}
mensaje = "hola";    // window.mensaje = "hola";
var altura = 500;    // window.altura = 500;
console.log(altura); // console.log(window.altura);
let altitud = 8;
const alto = true; 
// ==================================================

accion1(45, 86);
accion2();
console.log(auxiliar);

function accion1(a, b){ // a y b (parámtros). Los parametros son Locales a la fn accion1
  // LOCALES a la función accion1
  var cantidad = 10;
  let monto = 99.5;
  const valor = 345;

  console.log(altura, cantidad);
}

function accion2(){
  auxiliar = 568.49; // window.auxiliar = 568.489; 
  var altura = 80;
  var cantidad = 56;
  console.log(altura, cantidad, window.altura, auxiliar);
}