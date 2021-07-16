import { request } from '../../utils/ajax.js';

export function controller(root) {

  let archivosParaEnviar = [];
  const component = document.createElement("div");
  request("/views/uploader/template.html", init);

  function init(e){
    component.innerHTML = e.target.response;

    const dropzone = component.querySelector("#uploader-dropzone");
    dropzone.addEventListener("click", handleDropzoneClick);

    const input = component.querySelector("#uploader-input");
    input.addEventListener("change", e => {
      recorrerListaArchivos(input.files);
      input.value = ""; // resetear el input file
    });

    const btnSubir = component.querySelector("#btnSubir");
    btnSubir.addEventListener("click", subirFotos);

    root.innerHTML = "";
    root.appendChild(component);
  }

  function recorrerListaArchivos(listaArchivos){
    const dropzone = component.querySelector("#uploader-dropzone");
    const section = dropzone.querySelector("section");
    const frag = document.createDocumentFragment();
    for(let i=0; i < listaArchivos.length; i++) {
      let archivo = listaArchivos[i];
      let tarjeta = crearTarjetaFoto(archivo);
      frag.appendChild(tarjeta);
      archivosParaEnviar.push({
        id: tarjeta.dataset.id,
        file: archivo
      });
    }
    section.appendChild(frag);
  }

  function crearTarjetaFoto(blob) {
    const card = document.createElement("div");
    card.dataset.id = generarId();
    card.classList.add("card");
    card.innerHTML = `
      <div>
        <i class="fa fa-times"></i>
      </div>
      <img src="${URL.createObjectURL(blob)}" height="50" />
      <div>${blob.name}</div>
      <div>${blob.type}</div>
      <div>${(blob.size/1024).toFixed(1)} Kb</div>
    `;
    return card;
  }

  function handleDropzoneClick(e) {
    if(e.target.classList.contains("fa-times")){
      e.preventDefault();
      e.stopPropagation();
      let tarjeta = e.target.closest(".card");
      console.log(archivosParaEnviar);

      let idTarjeta = tarjeta.dataset.id;
      let objParaBorrar = archivosParaEnviar.find(ob => ob.id == idTarjeta);
      archivosParaEnviar = archivosParaEnviar.filter(ob => ob != objParaBorrar);
      
      tarjeta.remove();
      console.log(archivosParaEnviar);
    }
  }

  function generarId() {
    return Math.ceil(Math.random() * 100000);
  }

  function subirFotos(e){
    
    const fd = new FormData();
    //fd.set("nombre", "juan");
    //fd.append("nombre", "anna");
    //fd.set("edad", 48);
    archivosParaEnviar.forEach(ob => fd.append("fotografias", ob.file) );

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/subir');
    xhr.addEventListener('load', e => {});
    xhr.send(fd);
  }
}


/*
let colores = ["red", "green", "blue", "orange"];
let quitar = "green";

let colores2 = colores.filter(c => c != quitar);
console.log(colores2); // ["red", "blue", "orange"]
*/