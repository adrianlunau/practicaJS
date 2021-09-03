// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])

// let str = "un string cualquiera"
// let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])


let array = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];


function aMayusculas(unArray) {
    string = unArray.join();
    string = string.toUpperCase();
    string = string.split(",")

    return string;
}
//console.log(aMayusculas(array));

let otroArray = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let videoJuego;

function recopila(array1, array2) {
    array1.push(array2[0])
    array1.push(array2[1])
    array1.push(array2[2])
    array1.push(array2[3])
    array1.push(array2[4])

    videoJuego = array1[array1.length - 1]
    array1.pop();

    let nuevoArray = array1;

    return aMayusculas(nuevoArray);
}

console.log(recopila(array, otroArray));
console.log(videoJuego);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparador(calif1, calif2) {
    if (calif1[0] === calif2[0] &&
        calif1[1] === calif2[1] &&
        calif1[2] === calif2[2] &&
        calif1[3] === calif2[3] &&
        calif1[4] === calif2[4] &&
        calif1[5] === calif2[5] &&
        calif1[6] === calif2[6] &&
        calif1[7] === calif2[7] &&
        calif1[8] === calif2[8]) {
        return `Los scores de ambos continentes no son iguales.`
    } else {
        return `Los scores de ambos continentes no son iguales.`
    }
}

console.log(comparador(asiaScores, euroScores));



function imprimirInverso(lista) {

}


function join(arreglo, separador) {
    if (arreglo.length === 4) {
        return arreglo[0].toString() + separador + arreglo[1].toString() + separador + arreglo[2].toString() + separador + arreglo[3].toString();
    } else {
        return 'Error, por favor ingresa un arreglo de 4 elementos';
    }
}

console.log(join([1, 2, 3, 3], "   "));


let ejemplo = [2, 3, 4, 3, 2].join();

console.log(ejemplo);

