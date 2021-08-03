const prueba = {}; // su prototipo es el Object

//const persona = Object.create(null); // nuevo objeto sin prototipo
//const persona = Object.create({ precio: 99 }); // nuevo objeto con prototipo literal
//const persona = Object.create(Object.prototype); // nuevo objeto con prototipo igual a Object (defecto)

const persona = Object.create(Object.prototype, {
  dni: { value: 0 },
  nacionalidad: { value: "argentina" },
  saludar: { value: function(){ console.log("Hola") }}
});

console.log(persona);

const datos = Object.create(persona, {
  nombre: { 
    value: "Laura",
    writable: true, // modificable
    configurable: true, // borrable
    enumerable: true, // visible en iteraciones
  },
  edad: { value: 28, enumerable: true }
});

console.log(datos);



Object.defineProperties(datos, {
  email: { 
    value: "none@email.com", 
    enumerable: true
  }
})

for(let prop in datos){
  console.log(prop, datos[prop])
}