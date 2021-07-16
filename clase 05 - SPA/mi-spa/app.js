import { router, handleMenuClick } from './utils/router.js';

// la primer carga
//window.addEventListener('load', e => router(window.location.pathname) );

// se pulso back o forward
window.addEventListener('popstate', e => router(window.location.pathname));

const menu = document.getElementById("menu");
menu.addEventListener("click", handleMenuClick);