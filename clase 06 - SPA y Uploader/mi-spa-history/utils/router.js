import { controller as home } from '../views/home/controller.js';
import { controller as services } from '../views/services/controller.js';
import { controller as contact } from '../views/contact/controller.js';
import { controller as uploader } from '../views/uploader/controller.js';
import { controller as error404 } from '../views/404/controller.js';

export function router(e){
  const menu = document.getElementById("menu");
  const rootElement = document.getElementById("viewContent");
  rootElement.innerHTML = "<h2>Cargando...</h2>";
  let rutaActual = window.location.pathname;

  //console.log(e.state);

  const controllers = {
    "/home": home,
    "/services": services,
    "/contact": contact,
    "/uploader": uploader,
    "error404": error404,
  };

  if(rutaActual == "/") {
    rutaActual = "/home";
  }

  if(rutaActual in controllers == false) {
    rutaActual = "error404";
  }
  
  controllers[rutaActual](rootElement);
  
  menu.querySelectorAll("a").forEach(link => link.classList.remove("selected"));
  let seleccionado = menu.querySelector(`a[href="${rutaActual}"]`);
  seleccionado && seleccionado.classList.add("selected");
}

export function handleMenuClick(e){

  if(e.target.tagName == "A"){
    e.preventDefault();
    e.stopPropagation();

    let ruta = e.target.getAttribute("href");
    // [ newWindow, / ]
    window.history.pushState(null, null, ruta);  // no produce request
    // [ newWindow, /, /services ]
    router();
  }

}