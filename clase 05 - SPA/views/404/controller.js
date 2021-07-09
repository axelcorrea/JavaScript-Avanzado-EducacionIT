import { request } from '../../utils/ajax.js';

export function controller(root){
  const component = document.createElement("div");
  request("/views/404/content.html", render);

  function render(e){
    component.innerHTML = e.target.response;

    root.innerHTML = "";
    root.appendChild(component);
  }
  
}