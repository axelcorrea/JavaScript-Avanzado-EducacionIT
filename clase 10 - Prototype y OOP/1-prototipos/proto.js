const persona = {
  dni: 0,
  nacionalidad: 'argentina'
}

const datos = {
  nombre: "Laura",
  edad: 28
}

console.log(datos);

console.log(datos.nombre); // "Laura"
console.log(datos.nacionalidad); // undefined
console.log(datos.toString()); "[object Object]"

// Hack
datos.__proto__ = persona; // el prototipo de 'datos' es ahora 'persona'

console.log(datos.nacionalidad); // "argentina"
console.log(datos.toString()); // "[object Object]"
console.log(datos.tarjetaCredito); // undefined

/*
var a = { edad: 10 }
var b = a;
a.edad++;
console.log(b.edad); // 11
*/


for(let pr in datos){
  console.log(pr, datos[pr]);
}