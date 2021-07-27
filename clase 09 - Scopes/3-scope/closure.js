var vendedor;
var homero;

vendedor = fabrica("Vendedor", "red");
homero = fabrica("Homero", "blue");

console.dir(homero);
console.dir(vendedor);

homero("Oiga, puede ir ahí al frente y traerme un pedazo de pizza?");
vendedor("no pizza, solo Khlav kalash");
homero("maldicion!, bueno deme un plato");
vendedor("no plato, vara! vara!");
homero("guacala de perros! sabe horrible!");
homero("mmm! bueno ¿qué tiene para quitarme éste horrible sabor?");
vendedor("Agua o jugo de cagrejos");
homero("que asqueroso! jugo de cangrejo, bueno demelo");


function fabrica(nombre, color){
	var noUsada = 999;
	var total = 0;
	var personalizada = function(frase){
		total++; // closure
		console.log(`%c ${nombre}: "${frase}"`, `color:${color}`);
		console.log(nombre, total);
	}

	console.log(noUsada);

	return personalizada;
} // garbage collector: todas las locales son destruidas
