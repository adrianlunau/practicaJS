// Nueva forma de concatenar, es usando las literal templates, que son las comillas inclinadas 


function efe(x) {
    return 2 * x + 5;
}

console.log(`El resultado de la funcion es: ${efe(1)}`);



// Ejercicios

// Funcion que convierte de pulgadas a centimetros

function convertidor(valor){
    return valor * 2.54;
}

console.log(convertidor(3))


// Funcion que recibe un string y lo convierte en una url

function urlConverter(nombre){
    return "https//www." + nombre + ".com"
}

console.log(urlConverter("pepito"))


// Funcion recibe un string y lo devuelve con exclamacion

function grito(nombre){
    return  nombre + "!!!"
}

console.log(grito("pepito"))

// Calcula la edad de un perrp

function edadPerruna(edad){
    return edad*7
}

console.log(edadPerruna(3));

// Funcion calcula la hora de trabajo, considerando q trabajas 40hs mensuales

function calcularHora(sueldo){
    return sueldo/40;
}

console.log(calcularHora(100000));

// PAsar a mayuscula

function pasarAMayusculas(string){
    return string.toUpperCase();
}



console.log(pasarAMayusculas("hola"));
