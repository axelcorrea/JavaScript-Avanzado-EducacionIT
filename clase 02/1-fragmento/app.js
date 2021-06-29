const paises = [
    { codigo: "ar", nombre: "Argentina"},
    { codigo: "br", nombre: "Brasil"},
    { codigo: "cl", nombre: "Chile"}
];

const selector = document.getElementById("cboPaises");

/*
// Version 1 (Nadda óptima)
paises.forEach(function(pais){
    const opcion = document.createElement("option");
    opcion.textContent = pais.nombre;
    opcion.value = pais.codigo;

    selector.appendChild(opcion); //appendChild a un elemento del DOM dentro de un bucle, esta desaconsejado
});
*/

/*
// Version 2 (mejorada)
let auxiliar = document.createElement("DIV");
paises.forEach(function(pais){
    const opcion = document.createElement("option");
    opcion.textContent = pais.nombre;
    opcion.value = pais.codigo;

    auxiliar.appendChild(opcion);
});

selector.appendChild(auxiliar);
*/

// Version 3 (definitiva)
let auxiliar = document.createDocumentFragment(); //<></>
paises.forEach(function(pais){
    const opcion = document.createElement("option");
    opcion.textContent = pais.nombre;
    opcion.value = pais.codigo;

    auxiliar.appendChild(opcion);
});

selector.appendChild(auxiliar);







//---------
let url = "https://wikipedia.org";

let enlace = document.createElement("a"); 
enlace.textContent = "Wikipedia"; // <a>Wikipedia</a>
enlace.href = url; // <a href="https://wikipedia.org">Wikipedia</a>
document.body.appendChild(enlace); // agrega un HTMLElement como hijo
enlace.style.background = "orange";
enlace.style.padding = "10px";
enlace.style.borderRadius = "12px";
