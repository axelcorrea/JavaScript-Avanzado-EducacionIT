// https://jsoneditoronline.org/

const datos = {
  nombre: 'Laura',
  edad: 34,
  estudia: true,
  materias: [
    { cod: 234, nota: 8 },
    { cod: 265, nota: 5 },
    { cod: 563, nota: 10 },
  ],
  //saludar: function(){ console.log('Hola') }
};

// Serializado: convertido en una cadena que represente al objeto
const cadenaJson = JSON.stringify(datos); // OBJETO -> CadenaJSON
console.log(cadenaJson); // con esta cadena, puedo enviarla a un servidor con ajax

/*
const xhr = new XMLHttpRequest();
xhr.open('post', '/blablabla');
xhr.addEventListener('load', e=>{});
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(cadenaJson);
*/

const respuestaServer = '{"nombre":"Luis","edad":24,"estudia":true,"materias":[{"cod":234,"nota":9},{"cod":265,"nota":3}]}';
const datosObtenidos = JSON.parse(respuestaServer); // CadenaJSON -> OBJETO

datosObtenidos.edad = 18;
console.log(datosObtenidos);