// ES5

// Declarar una variable
var total;

// Asignar un valor
total = 100;

//Declarar y asignar en una sola sentencia
var cantidad = 9;

var datos = {
    nombre: 'Juan', // propiedad (clave : valor)
    estudia: true,
    edad: 46,
    saludar: function() { alert("hola") } //metodo
}

console.log(datos.edad); //notacion de punto
datos.saludar(); //invoca la fn anonima

var IVA = 21; //convencion: todo mayuscula para constantes
IVA = 34;

var precio = 100;
var precio = 1000; //reasignacion de valor

// ES6

let likes = 10;
//let likes = 2;
likes = 2;
let algo; //se puede declarar sin asignar valor

const PI = 3.1416;
PI = 4;

const algo;  //con const no se puede declarar sin asignar valor

const titulo = document.getElementById("titulo");

titulo.style.color = "red";
titulo.style.fontFamily = "arial";