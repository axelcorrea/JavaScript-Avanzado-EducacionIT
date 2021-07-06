const texto_dark = "Elegir tema Dark";
const texto_light = "Elegir tema Light";

const boton = document.getElementById("accion");
boton.onclick = function() {

    let body = document.body;
    body.classList.toggle("dark");
    let condicion = body.classList.contains("dark");
    boton.textContent = condicion ? texto_light : texto_dark;
};


let edad = 18;
/*
let tipo;

if(edad >= 18) {
    tipo = "Adulto";
}else {
    tipo = "Menor";
}
*/

let tipo = (edad >= 18) ? "Adulto" : "Menor";

console.log("Tipo: ", tipo);
