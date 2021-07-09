export function request(path, callback){
    const xhr = new XMLHttpRequest();
    xhr.open('get', path);
    xhr.addEventListener('load', callback);
    xhr.send();
  }
  
  
  // EJ:
  // request("frase.txt", precesarRespuesta);
  
  /*
  
  function mostrar(a, b){ // 1inv: 10 y 32 / 2inv: 9 y 8 / 3inv: 64 y function(){ console.log("hola") }
    console.log(a, b)
  }
  
  function probar(){ console.log("hola") }
  
  var z = 9;
  var r = 8;
  
  mostrar(10, 32);
  mostrar(z, r);
  mostrar(64, probar);
  
  */