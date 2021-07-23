import { handleJsonResponse, handleFetchError } from './fetchUtils.js';
/*
const promesaRespuestaFetch = fetch('http://localhost:3000/users')
promesa
  .then()
*/

/*
fetch('http://localhost:3000/usersx')
  .then(respuestaFetch => {
    if(respuestaFetch.ok == false){
      //Promise.reject("Ajax malo");
      throw new Error("Ajax malvado");
    }
    let promesaJson = respuestaFetch.json();
    return promesaJson;
  })
  .then(users => {
    console.log("USERS:", users);
  })
  .catch(err => {
    console.log(err);
  });
*/

fetch('http://localhost:3000/users')
  .then(handleJsonResponse)
  .then(representarUserComoLista)
  .catch(handleFetchError);



fetch('http://localhost:3000/articles')
  .then(resp => resp.json())
  .then(articles => console.log(articles))
  .then(()=>console.log("Hola"))
  .then(()=>console.log("Chau"))
  .catch(handleFetchError)
  .then(()=>console.log("Tambien siempre"))
  .finally(()=>console.log("Siempre"));


function representarUserComoLista(users){
  let ul = document.createElement("ul");
  users.forEach(u => {
    let li = document.createElement('li');
    li.textContent = u.name;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}