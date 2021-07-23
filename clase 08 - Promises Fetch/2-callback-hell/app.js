const URL = 'http://localhost:3000';

get('/users', e => {
  const users = JSON.parse(e.target.response);
  const idUser = users[1].id;
  get('/articles?userId='+idUser, e => {
    const articles = JSON.parse(e.target.response);
    const idArti = articles[1].id;
    get('/comments?artId='+idArti, e => {
      const comments = JSON.parse(e.target.response);
      console.log(comments);
    });
  });
});


//------------------------------------------

function get(recurso, callback){
  const xhr = new XMLHttpRequest();
  xhr.open('get', URL + recurso);
  xhr.addEventListener('load', callback);
  xhr.send();
}