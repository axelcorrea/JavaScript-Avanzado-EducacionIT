const formuReg = document.forms.registro;
formuReg.addEventListener("submit", validar);

function validar(e){
  const formu = e.target; // this
  const inputCorreo = formu.querySelector('input[name="correo"]');
  const inputClave = formu.elements.clave;

  //const expRegEmail = new RegExp("[a-z\.]+@\w+\.\w{2,4}", "i");
  const expRegEmail = /[a-z\.]+@\w+\.\w{2,4}/i;

  // expRegEmail.test("pepe"); // false
  // expRegEmail.test("pepe@hotmail.com"); // true

  const errores = [];

  // buscar posibles errores:
  // el correo no tiene el formato esperado
  if(expRegEmail.test(inputCorreo.value) == false){
    errores.push("el correo no tiene el formato esperado");
  }

  // la clave no puede quedar vacía
  if(inputClave.value == ""){
    errores.push("la clave no puede quedar vacía");
  }

  if(errores.length > 0){
    e.preventDefault(); // evita enviar el formulario
    let lista = document.getElementById("errores");
    lista.innerHTML = "";
    const frag = document.createDocumentFragment();
    errores.forEach(err => {
      const li = document.createElement("li");
      li.textContent = err;
      frag.appendChild(li);
    });
    lista.appendChild(frag);
  }
  
}