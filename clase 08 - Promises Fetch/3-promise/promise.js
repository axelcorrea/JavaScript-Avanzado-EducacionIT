/*
Promesa: en JS es un objeto que tiene un estado:
inicialmente, ese estado es 'pendiente'
Pero en algun punto del tiempo, ese estado cambiará a 'resuelta' o 'rechazada'.
Una promesa en el mundo real es un enunciado, en JS una promesa es un objeto vinculado a una fn
que representa una acción asincrona (o sea, que se resolverá con el tiempo).
*/

const promesaUsers = new Promise(function(resolve, reject){
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'http://localhost:3000/users');
  xhr.addEventListener('load', e => {
    if(xhr.status == 200){
      let users = JSON.parse(xhr.response);
      resolve(users); // cambio el estado a 'resuelto' en el obj de promesa vinculado
    }
    else{
      reject("No se pudo traer los usuarios");  // cambio el estado a 'rechazado' en el obj de promesa vinculado
    }
  })
  xhr.send();
});

console.log(promesaUsers); // pendiente

/*
promesaUsers.then(usuarios => console.log("llego la data", usuarios));
promesaUsers.catch(err => console.log("error", err));
*/

promesaUsers
  .then(usuarios => {
    console.log("llego la data", usuarios)
  })
  .catch(err => {
    console.log("error", err)
  });

console.log(promesaUsers); // pendiente

