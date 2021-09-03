//  En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
//  Esta función recibe un número X por parámetro y cuenta la cantidad de números impares
//  que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 
//  Para resolver la ejercitación debemos utilizar el for .

function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for (let vuelta = 1; vuelta <= numero; vuelta++){
        if (vuelta % 2 === 0){
            
            contador += 1;
        }
    }
    return contador;
}

console.log(noParesDeContarImparesHasta(11));



// Queremos construir una función llamada encontreUn5 que reciba un array como parámetro llamado numeros. 
// La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de 
// encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".



let arrayNumeros = [1,2,7,4,11,5,3,4]

function encontreUn5 (numeros) {
    let vuelta = 0
    while (numeros[vuelta] !== 5) {
        console.log(numeros[vuelta]);
        vuelta++;
    }
    console.log("Se encontró un 5!");
}

encontreUn5(arrayNumeros);


// Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. 
// Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

// Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:
// 5 * 1 = 5
// 5 * 2 = 10

// 5 * 3 = 15

// ...

// hasta llegar a multiplicarlo por 10.


function tablaDeMultiplicarFor(numero) {
 	  for (let vuelta = 1; vuelta<=10; vuelta++) {
           console.log(numero.toString() + " * " + vuelta.toString() + " = " + numero*vuelta);
           
       }
}

tablaDeMultiplicarFor(3)



function tablaDeMultiplicar(numero) {
 	  let i = 1
       while(i <= 10) {
        console.log(numero.toString() + " * " + i.toString() + " = " + numero*i);
        i++;
       }
}

tablaDeMultiplicar(2)