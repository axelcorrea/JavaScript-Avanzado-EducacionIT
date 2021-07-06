var total = 10;
console.log("Inicio");
console.log("anonymous 1");
console.log("anonymous 2");
primera();
console.log("anonymous 3");
console.log("Fin");

//---------------------
function primera(){
  var cantidad = 0;
  console.log("primera 1");
  console.log("primera 2");
  cantidad++;
  total++;
  segunda();
  console.log("primera 3");
}

function segunda(){
  total++;
  var algo = 10;
  console.log("segunda 1");
  console.log("segunda 2");
  console.log("segunda 3");
}

function tercera(){
  tercera();
}
//---------------------