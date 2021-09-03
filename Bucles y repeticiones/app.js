let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];


function aMayusculas (array) {
    for (let i = 0; i < array.length; i++) {
        
        array[i] = array[i].toUpperCase();
        
    }

    return array;
    
}

console.log(aMayusculas(peliculas));

let pelisAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]


function pasajeDeElementos(array1, array2){
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i])        
    }
    aMayusculas(array1)
    return array1
}

console.log(pasajeDeElementos(peliculas, pelisAnimadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let comparacionesAsiaEuropa = [];

function comparador(arr1, arr2){
    for (let i = 0; i < arr2.length; i++) {
        comparacionesAsiaEuropa[i] = arr1[i] === arr2[i];        
    
    }
    return comparacionesAsiaEuropa;
}

console.log(comparador(asiaScores, euroScores));


// Concurso de clavados

let participanteA = [5, 8, 4, 9, 5]
let participanteB = [8, 7, 8, 6 ,8]
let participanteC = [7, 5, 10, 8 ,3]

function promedio (arra) {
    let sumatoria = 0;
    for (let i = 0; i < arra.length; i++) {
        sumatoria = sumatoria + arra[i];
        
    }
    return sumatoria/arra.length;
}

function puntaje (a) {
    mayorPuntaje = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > mayorPuntaje) {
            mayorPuntaje = a[i];
        }
        
    }
    return mayorPuntaje;
}

function competencia (p1, p2, p3) {
    
}





