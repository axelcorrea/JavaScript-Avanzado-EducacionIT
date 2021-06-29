// Declaración de la fn
function mostrar(a, b) { // a y b son parámetros
    console.log(a, b);
    console.log(arguments);
  }
  
  // Invocación
  mostrar(10, 20, 30, 40, 50); // 10 y 20 son argumentos
  
  //console.log(mostrar); // mostrar es el nombre de la fn (la variable que guarda la fn)
  
  // ES5
  function sumar(){
    let total = 0;
    for(let i=0; i < arguments.length ; i++){
      total += arguments[i]; // total = total + arguments[i];
    }
    return total;
  }
  
  let resp1 = sumar(10, 20, 500, 1000);
  let resp2 = sumar(900, 35);
  console.log(resp1, resp2);
  
  // ES6
  function mostrarX(a, b, ...r){ // operador rest
    console.log(a, b, r);
  }
  
  mostrarX(10, 20, 30, 40, 50);
  
  function sumarX(...valores){
    let reducido = valores.reduce(function(acumulado, nro){ // 0, 10, 64, 564
      return acumulado + nro;
    }, 0);
  
    return reducido; // 2564
  }
  
  let resp3 = sumarX(10, 54, 500, 2000);
  let resp4 = sumarX(800, 45);
  console.log(resp3, resp4);
  
  const sumarY = (...r) => r.reduce((acumulado, nro) => acumulado + nro, 0);
  
  let resp5 = sumarY(10, 54, 500, 2000);
  console.log(resp5);