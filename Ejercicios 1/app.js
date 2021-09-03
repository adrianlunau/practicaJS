// ------------- Concurso con 2 participantes ----------------------

// const alicia = [23,82,46]
// const bob = [45,8,32]

// function encontrarGanador  (a, b) {
//     let puntosA = 0;
//     let puntosB = 0;

//     for (let i = 0; i < b.length; i++) {
//         if (a[i]>b[i]) {
//             puntosA += 1;
//         } else if (a[i]< b[i]){
//             puntosB += 1;
//         }
        
//     }
//     if (puntosA > puntosB) {
//         return "el primer"
//     } else if (puntosA < puntosB){
//         return "el segundo"
//     } else {
//         return "ningun"
//     }
// }

// console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");


//---------Concurso con 3 participantes ------------------------------------

const alicia = [23, 60, 32, 2, 39]
const bob = [12, 67, 43, 93, 80]
const lean = [15, 0, 5, 36, 81]

function encontrarGanador  (a, b, c) {
    let puntosA = 0;
    let puntosB = 0;
    let puntosC = 0;

    for (let i = 0; i < b.length; i++) {
        if (a[i]>b[i] && a[i]>c[i]) {
            puntosA += 1;
        } else if (b[i]>a[i] && b[i]>c[i]){
            puntosB += 1;
        } else {
            puntosC += 1;
        }
        
    }
    if (puntosA > puntosB && puntosA > puntosC) {
        return "el primer"
    } else if (puntosB > puntosA && puntosB > puntosC){
        return "el segundo"
    } else if (puntosC > puntosA && puntosC > puntosB){
        return "el tercer"
    } else {
        return "ningun"
    }
}

// console.log("El ganador es: " + encontrarGanador(alicia, bob, lean) + " participante");



// ---------- Numeros multiplos --------------------------------


function digitalHouse(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i% num1 === 0 && i% num2 === 0){
            console.log("Digital House");
        } else if (i % num1 === 0){
            console.log("Digital");
        } else if (i% num2 === 0){
            console.log("House");
        } else {
            console.log(i);
        }
        
    }
}

//digitalHouse(21, 4);


// ---------  suma de numeros que contiene un array ----------------

const numeros = [10, 3, 10, 4, 11, 20]

function sumArray(array) {
    let sumatoria = 0;
    for (let i = 0; i < array.length; i++) {
        sumatoria += array[i];
        
    }
    return sumatoria;
}

// console.log(sumArray(numeros));


// ----------  Funcion JOIN ------------------------------

const arrayLetras = ["h", "o", "l", "a", " ", "j", "u","a", "n", "c", "a", "r", "l", "o"]
function similJoin(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string = string + array[i]
        
    }
    return string;
}

console.log(similJoin(arrayLetras));


