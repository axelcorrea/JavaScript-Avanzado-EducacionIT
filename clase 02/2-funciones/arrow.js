ejemplo();
// Statement function (pueden invocarse antes de definirse)
function ejemplo(){
  console.log("Hola");
}

// Function expression (pueden invocarse SOLO despues de definirse)
let prueba2 = function(){
  console.log("Chau");
}
prueba2();
prueba2 = null;
//---------------------------------------------------------
// ES5
var sumar = function(a, b){
  console.log(a, b);
  return a + b;
}
// ES6
const sumarX = (a, b) => {
  console.log(a, b);
  return a + b;
}
//---------------------------------------------------------
// ES5
var restar = function(a, b){
  return a - b;
}
// ES6
const restarX = (a, b) => a - b; 
//---------------------------------------------------------
// ES5
var duplicar = function(m){
  return m * 2;
}
// ES6
var duplicarX = m => m * 2;
//---------------------------------------------------------
// ES5
var obtenerDatos = function(){
  return { id: 34, nombre: "Valeria", edad: 34 }; 
}
// ES6
const obtenerDatosX = () => ({ id: 34, nombre: "Valeria", edad: 34 }); 