let nav = document.querySelector("nav");
nav.addEventListener("click", handleClickLinks);

//callback
function handleClickLinks(evento) {

    console.log("evento.target", evento.target); //referencia al elemento que genero 
    console.log("this", this); // referencia al elemento que se le agrego el EventListener
    let elementoClickeado = evento.target;

    if(elementoClickeado.tagName == "A") {
        evento.stopPropagation();
        evento.preventDefault(); //anula el comportamiento por defecto de la etiqueta "a" ante el evento "click"
        document.querySelector("iframe").src = elementoClickeado.href;      
    }
}

//modificarMarco({...});