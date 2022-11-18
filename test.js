// VARIABLES Y OPERACIONES
// ejercicio 4
var nombre;
var apellido;
var dineroAhorrado;
var deudas;

console.log(`${nombre} ${apellido}`);
console.log(dineroAhorrado - deudas);

// FUNCIONES
// ejercicio 2
const firstname = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstname + lastname;
const nickname = "juandc";

function introduccion(nomb1, nomb2, apod){
    console.log(`Mi nombre completo es ${nomb1} ${nomb2}, pero prefiero que me digas ${apod}`);
}
introduccion(firstname, lastname, nickname);

// CONDICIONALES
// ejercicio 2
const tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
let tipodesuscripcion2 = ['Free', 'Basic', 'Expert', 'ExpertPlus'];
let mensaje = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

for (i=0; i < tipodesuscripcion2.length; i++){
    if(tipoDeSuscripcion === tipodesuscripcion2[i]){
        console.log(`${tipodesuscripcion2[i]} mensaje: ${mensaje[i]}`);
    }
}

// CICLOS
// Ejercicio 2
let inter = 0;

while (inter <= 5){
    console.log(`El Valor de i es: ${inter} `)
    inter++
}

let inter2 = 10;
while (inter2 >= 0 ){
    console.log(`El valor de i es ${inter2}`);
    inter2--;
}

// Ejercicio 3
let resultado;
let intento = 0;

while (intento < 4){
    resultado = prompt('Cuanto es 2 +2?');
    if (resultado == 4){
        console.log('Correcto');
        intento = intento + 4;
    }else{
        console.log('Incorrecto, vuelve a intentar');
        intento++
    }
}

// LISTAS
// Ejercicio 1
let impresion = function(array1){
    if (array1 != null){
        console.log(datos[0])
    }else{
        console.log('Ingresa un array con datos')
    }
}
impresion(['hoola', 'nicaragua']);
// ejercicio 2
let impresion1 = function(array1){
    for (i=0; i <= array1.length; i++){
        console.log(array1[i])
    }
}
impresion1(['hoola', 'nicaragua']);

