console.log("INICIO"); // esto lo puede hacer el V8
setTimeout(() => console.log("1000"), 1000); // le voy a pedir al navegador que cuente hasta 1000 y luego me pida ejecutar la fn
setTimeout(() => console.log("CERO"), 0);    // le voy a pedir al navegador que cuente hasta 0 y luego me pida ejecutar la fn
console.log("MEDIO");
setTimeout(() => console.log("3000"), 3000);
setTimeout(() => console.log("500"),  500);
console.log("FIN");