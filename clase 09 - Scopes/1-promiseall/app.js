const URL_VENTAS = 'http://localhost:3000/ventas';
const URL_GASTOS = 'http://localhost:4000/gastos';
const URL_PRODS =  'http://localhost:4008/productos';

const promVentas = fetch(URL_VENTAS).then(r =>r.json());
const promGastos = fetch(URL_GASTOS).then(r =>r.json());
const promProds = fetch(URL_PRODS).then(r =>r.json());

//                                       2º           1º         3º
const promTodoCumple = Promise.all([ promGastos, promProds, promVentas ]);
// respuestas = [ [...], [...], [...] ]

/*
promTodoCumple
  .then(resp => crearDashboard(resp[2], resp[0], resp[1]) )
  .catch(err => console.log(err))
*/

promTodoCumple
  .then(([ gast, prods, vents ]) => crearDashboard(vents, gast, prods) )
  .catch(err => console.log(err));

function crearDashboard(ventas, gastos, productos){
  console.log("%cVentas:", "color:orangered", ventas);
  console.log("%cGastos:", "color:green", gastos);
  console.log("%cProductos:", "color:darkviolet", productos);
}

//---------------------------------

colorear(["#F50", "#4F0", "#01D" ]);


function colorear([red, green, blue]){
  console.log("%cAAA", "color:"+green);
  console.log("%cBBB", "color:"+red);
  console.log("%cCCC", "color:"+blue);
}




/*
function colorear(misColores){
  
  // let red = misColores[0];
  // let green = misColores[1];
  // let blue = misColores[2];
  
  let [red, green, blue] = misColores; // desestructuración de array

  console.log("%cAAA", "color:"+green);
  console.log("%cBBB", "color:"+red);
  console.log("%cCCC", "color:"+blue);
}
*/
