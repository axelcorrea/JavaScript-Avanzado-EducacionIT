const URL = 'https://pokeapi.co/api/v2/pokemon';


// ES6 

fetch(URL+'/pikachu')
  .then(respFetch => respFetch.json())
  .then(pikachu => console.log(pikachu))

// ES8
main();

async function main(){
  try{
    let pika = await obtenerPikachu();
    cardPikachu(pika);
  }
  catch(err){
    console.error(":::ERROR:::", err);
  }
}

async function obtenerPikachu(){
  const respFetch = await fetch(URL+'/pika');
  if(!respFetch.ok){
    throw new Error("Fetch pika fail");
  }
  const pikachu = await respFetch.json();
  return pikachu;
}

function cardPikachu(pikachu){
  const card = document.createElement("img");
  card.src = pikachu.sprites.front_default;
  document.body.appendChild(card);
}