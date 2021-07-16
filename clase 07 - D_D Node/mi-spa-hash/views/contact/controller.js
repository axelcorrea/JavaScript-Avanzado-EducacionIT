import { request } from '../../utils/ajax.js';

export function controller(root){
  const component = document.createElement("div");
  request("/views/contact/content.html", render);

  function render(e){
    component.innerHTML = e.target.response;

    const btn = component.querySelector("button");
    btn.addEventListener("click", saludar);

    root.innerHTML = "";
    root.appendChild(component);
  }
  
  function saludar(e){
    alert("Hola");
  }
  
}