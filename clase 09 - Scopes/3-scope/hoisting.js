var algo = 10;
var vaca = "purpura";
cambiar();
console.log(vaca); // "purpura" o "pegamento" ?
var mostrar = function(){ // funciones expression
  console.log("Hi!");
}
mostrar();

function cambiar(){  // funciones statement
  vaca = "pegamento";
  if( 2 == 96 ){
    var vaca;
    var otro = 20;
  }
}

function otra(){
  return false;
}

//---------------------------------------------
// Hoisting
/*
1) Ordenar el código (hoisting)
  1. Buscar las funciones statement y las coloca al inicio del script
  2. Separar las declaraciones de asignaciones
  3. colocar al inicio del script todas las declaraciones de variables
  4. Realizar los tres pasos anteriores dentro de cada función
2) Ejecutar el código
*/
//----------------------------------------
var algo;
var vaca;
var mostrar;

function cambiar(){  // funciones statement
  var vaca;
  var otro;
  vaca = "pegamento";
  if( 2 == 96 ){
    otro = 20;
  }
}

function otra(){
  return false;
}

algo = 10;
vaca = "purpura";
cambiar();
console.log(vaca); // "purpura" o "pegamento" ?
mostrar = function(){ // funciones expression
  console.log("Hi!");
}
mostrar();

//------------------------------------
// Declaración de globales
var algo = 10;
var vaca = "purpura";
var mostrar;

// Sentencias de programa
cambiar();
console.log(vaca); // "purpura" o "pegamento" ?
mostrar = function(){ // funciones expression
  console.log("Hi!");
}
mostrar();

// Funciones
function cambiar(){  // funciones statement
  // locales
  var vaca;
  var otro;

  // sentencias
  vaca = "pegamento";
  if( 2 == 96 ){
    otro = 20;
  }

  // funciones locales
  //...
}

function otra(){
  return false;
}
