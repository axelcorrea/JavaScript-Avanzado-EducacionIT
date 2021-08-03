const persona1 = {
  nombre: "Juan",
  edad: 58,
  saludar: function(){
    // this: es una referencia al objeto que invocó a la función
    console.log( "Yo soy " + this.nombre );
  }
}

persona1.saludar(); // "Yo soy Juan"

function presentar(a, b){
  console.log(this)
  console.log(this.nombre, a, b);
}

presentar.signo = "acuario";

console.dir(presentar);
console.log(typeof presentar);
console.log(typeof persona1);

presentar(10, 64); // window.presentar(10, 64);
presentar.apply({ nombre: "Carmen", estudia: false }, [100, 400]); // Carmen 100 400
presentar.call(persona1, 20, 86); // Juan 20 86

// call comma
// apply array

const button = document.getElementById("btnAccion1");
const button2 = document.getElementById("btnAccion2");
button.addEventListener("click", accion1);
button2.addEventListener("click", presentar.bind(persona1));

function accion1(e){
  console.log(this);
}

/*----------------------------
function addEventListener(nombreEvento, callback){
  ...
  const objEvento = ...
  callback.call(refBoton, objEvento);
  ...
}
-----------------------------*/

const presentarX = presentar.bind(persona1);

presentarX(56, 888888);
/*
function presentar(a, b){
  console.log(persona1)
  console.log(persona1.nombre, a, b);
}
*/

const presentarY = presentar.bind(persona1, 100, 80);

presentarY();

console.dir(presentar);
console.dir(presentarX);
console.dir(presentarY);