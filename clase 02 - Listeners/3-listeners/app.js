const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
//console.log(btn1);

let cantidad = 0;
btn1.addEventListener("click", pintarFondo);
btn1.addEventListener("click", contar);
btn2.addEventListener("click", () => btn1.removeEventListener("click", contar) );

function pintarFondo(){
  document.body.classList.toggle("atardecer");
}

function contar(){
  document.getElementById("contador").textContent = ++cantidad; // pre y post incremento
}