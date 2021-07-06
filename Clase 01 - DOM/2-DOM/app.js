//Captura 
const referenciaTitulo = document.getElementById("titulo"); //HTMLElement o null

console.dir(referenciaTitulo);
/*
    document.getElementsByClassName()
    document.getElementsByTagName()
    document.getElementsByName()

    HTMLCollection: un Array de HTMLElements (resultado VIVO)
*/
// Manipular
referenciaTitulo.innerHTML = "Curso de JavaScript Avanzado"
//referenciaTitulo.innerHTML = "Curso de <i>JavaScript</i> Avanzado"

//referenciaTitulo.innerText = "Curso de <i>JavaScript</i> Avanzado" //No recomendado
//referenciaTitulo.textContent = "Curso de <b>JavaScript</b> Avanzado" //Recomendado

// referenciaTitulo.style.color = "orangered";
// referenciaTitulo.style.backgroundColor = "beige";

referenciaTitulo.classList.add("redondeado");
//referenciaTitulo.classList.add("resaltado");
//referenciaTitulo.classList.add("especial");
//referenciaTitulo.classList.add("resaltado");

let r1 = referenciaTitulo.classList.contains("redondeado");
console.log(r1); //true

let r2 = referenciaTitulo.classList.contains("sarasa");
console.log(r2); //false

//Comportamiento
referenciaTitulo.onclick = function() {
    alert("Soy un H1")
}

//-----------------------------------------------------

const referenciaPrimerParrafo = document.querySelector("p");
console.log(referenciaPrimerParrafo);

const referenciaTodosParrafos = document.querySelectorAll("p");
console.log(referenciaTodosParrafos);

/*
for(let i=0; i < referenciaTodosParrafos.length; i++) {
    referenciaTodosParrafos[i].classList.add("resaltado");
}
*/

referenciaTodosParrafos.forEach(function(parrafo) { 
    parrafo.classList.add("resaltado");
});

