import { controller as home } from '../views/home/controller.js';
import { controller as services } from '../views/services/controller.js';
import { controller as contact } from '../views/contact/controller.js';
import { controller as error404 } from '../views/404/controller.js';

export function router(rutaActual){
  const rootElement = document.getElementById("viewContent");
  rootElement.innerHTML = "<h2>Cargando...</h2>";
  
  const controllers = {
    "/": home,
    "/home": home,
    "/services": services,
    "/contact": contact,
    "error404": error404,
  };

  if(rutaActual in controllers == false) {
    rutaActual = "error404";
  }
  
  controllers[rutaActual](rootElement);

}

export function handleMenuClick(e){

  if(e.target.tagName == "A"){
    e.preventDefault();
    e.stopPropagation();

    let ruta = e.target.getAttribute("href");
    // [ newWindow, / ]
    window.history.pushState(null, null, ruta);  // no produce request
    // [ newWindow, /, /services ]
    router(ruta);
  }

}