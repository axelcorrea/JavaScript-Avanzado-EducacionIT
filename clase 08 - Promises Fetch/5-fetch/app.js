import { handleJsonResponse, handleFetchError } from './fetchUtils.js';

const URL = 'http://localhost:3000';

/*
fetch(URL+'/users')
  .then(r=>r.json())
  .then(users => {
    const idUser = users[1].id;
    return fetch(URL+"/articles?userId="+idUser);
  })
  .then(r=>r.json())
  .then(articles => {
    const idArti = articles[1].id;
    return fetch(URL+'/comments?artId='+idArti);
  })
  .then(r=>r.json())
  .then(comments => {
    console.log(comments);
  })
*/

fetch(URL+'/users')
  .then(handleJsonResponse)
  .then(users => {
    const idUser = users[1].id;
    return fetch(URL+"/articles?userId="+idUser);
  })
  .then(handleJsonResponse)
  .then(articles => {
    const idArti = articles[1].id;
    return fetch(URL+'/comments?artId='+idArti);
  })
  .then(handleJsonResponse)
  .then(comments => {
    console.log(comments);
  })
  .catch(handleFetchError)

/*
PromesaX
  .then(callbackOK)
  .catch(callbackFail)

PromesaX
  .then(callbackOK, callbackFail)
*/