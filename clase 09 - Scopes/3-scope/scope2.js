if(1 == 1){
  var aux = 10; // GLOBAL scope
  let auxiliar = 80; // BLOCK scope
  const otro = 34; // BLOCK scope
  console.log(aux, auxiliar, otro);
}

console.log(aux);
//console.log(auxiliar);
//console.log(otro);

for(let i=0; i<100; i++){

}

//console.log(i);