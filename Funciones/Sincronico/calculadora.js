function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

console.log("El resultado de la suma es: " + sumar(13, 5));
console.log("El resultado de la resta es: " + restar(13, 5));
console.log("El resultado de la multiplicacion es: " + multiplicar(13, 5));
console.log("El resultado de la division es: " + dividir(13, 5));
console.log("El resultado de la division por 0 es: " + dividir(13, 0));

console.log("El resultado de la division sin argumentos es: " + dividir());


function cuadradoDeUnNumero (a){
    return multiplicar(a,a);
}

console.log("El resultado de la potencia es: " + cuadradoDeUnNumero(4));

function promedioDeTresNumeros (a, b, c){
    return dividir((sumar(a, b) + c), 3);
}

console.log(promedioDeTresNumeros(2, 6, 8))

function calcularPorcentaje (numeroTotal, porcentaje){
    return dividir(multiplicar(numeroTotal, porcentaje), 100)
}

console.log("El 10% de 50 es:" + calcularPorcentaje(50, 10));

function geneadorDePorcentaje(primerNumero, segundoNumero){
    return multiplicar(dividir(primerNumero, segundoNumero), 100);
}

console.log(geneadorDePorcentaje(2, 200));


console.log()

