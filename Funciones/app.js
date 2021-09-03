// Funcion expresada

let sumar = function(a, b) {
    return a + b;
}

console.log(sumar(3, 5));



// Funcion declarada

function restar(c, d){
    return c-d;
}

console.log(restar(14, 2));


// Ejemplo de scope

let mensaje = "Hola";

function saludar() {
    let mensaje = "Chau";
    return mensaje;
}

console.log(mensaje);
console.log(saludar());