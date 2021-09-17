/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

let conversor = pulgadas => pulgadas * 2.54;

// Crear una función que recibe un string y lo convierte en una una URL. 
// ej: “pepito” es devuelto como “http://www.pepito.com”

let aUrl = string => `http://www.${string}.com`

//console.log(aUrl("pepito"));

//Crear una función que recibe un string y devuelve la misma frase pero con admiración.

let admiración = string => `${string}!!`

// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

let conversorEdad = edad => edad*7;

// console.log(conversorEdad(3));

// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
// PD: considera que tu mes de trabajo tiene 40 horas.

let calculaHora = sueldo => sueldo/40;

// console.log(calculaHora(120000));

// Crear la función calculadorIMC() que reciba la altura en metros y 
// el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar 
// la función probando diferentes valores.

let calculadorIMC = (altura, peso) => peso/(altura*altura);

// console.log(calculadorIMC(1.7, 90));

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
// Investiga que hace el método de strings .toUpperCase()

let aMayuscula = string => string.toUpperCase();

//console.log(aMayuscula("hola"));

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
// pista: te servirá revisar que hace la palabra reservada typeof.

let tipoDeDato = dato => typeof(dato)

//console.log(tipoDeDato("Hola"));

// Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia
// Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi

let calcularCircunsferencia = radio => radio*2*Math.PI;

//console.log(calcularCircunsferencia(20));

const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

let buscarNombre = (nombre, callBack) => {
    let respuesta = ""
    
    for (let i = 0; i < nombres.length; i++) {
        const element = nombres[i];
        if (element === nombre) {
            respuesta = "x"
            return callBack(respuesta)
        } 
    }
    return callBack(respuesta)
}

console.log(buscarNombre("Cosme", mostrarResultado));

function mostrarResultado (res){
    if (res === "") {
        return "Nombre no encontrado"
    } 
    return "El nombre fue encontrado"
}

//console.log(mostrarResultado());
