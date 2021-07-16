import { router, handleMenuClick } from './utils/router.js';

// la primer carga o refresh
window.addEventListener('load', router);

// se pulso back o forward
window.addEventListener('popstate', router);

const menu = document.getElementById("menu");
menu.addEventListener("click", handleMenuClick);