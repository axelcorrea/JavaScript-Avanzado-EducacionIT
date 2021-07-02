const boton = document.querySelector("button");

boton.addEventListener("click", e => {
    document.body.classList.toggle("atardecer");
});


// Despacho de eventos, generar un evento de forma artifical
let objetoEventoClick = new Event("click", { bubbles: true});
boton.dispatchEvent(objetoEventoClick);