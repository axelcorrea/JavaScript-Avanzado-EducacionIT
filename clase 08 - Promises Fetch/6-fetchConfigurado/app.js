const URL = 'http://localhost:3000';
const boton = document.querySelector("button");

boton.addEventListener("click", agregarUsuario);


function agregarUsuario(e){

  const usuarioNuevo = {
    name: "Fufu",
    years: 20,
    study: false
  };

  //fetch(URL+'/users') // GET /users

  fetch(URL+'/users', {  // POST /users
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuarioNuevo)
  })
  .then(r=>r.json())
  .then(r=>console.log("Servidor dice:", r))

}