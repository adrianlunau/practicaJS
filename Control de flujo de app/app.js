5// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."

// Importante: no se deberá mostrar ningún otro mensaje.


// Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.


// Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".


// let edad=11 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)


// if(edad<18 && edad > 0) {
// console.log("No puede pasar al bar.")
// }
// else if(edad<21 && edad>18){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// }
// else if(edad<21 && edad>18){
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
//     }
// else if (edad === 21) {
//     console.log("Bienvenido y felicitaciones")
// }
// if (edad % 2 != 21) {
//     console.log("¿Sabías que tu edad es impar?")
// }
// else{
// console.log("Puede pasar al bar y tomar alcohol.")
// }




// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y  litrosConsumidos. 
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
// Si el vehículo es “coche”, el precio por litro es de $86.
// Si es “moto”, ha de ser $70.
// Si es “autobús”, ha de ser $55.
// Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.




// function totalAPagar(vehiculo, litroConsumidos) {
//     let precioLitro
    
//     switch (vehiculo) {
//         case "coche":
//             precioLitro = 86;
//             break
//         case "moto":
//             precioLitro = 70;
//             break
//         case "autobus":
//             precioLitro = 55;
//             break
    
//         default:

//             break;
//     }
//     let cargoAdicional;
//     if (litroConsumidos>=0 && litroConsumidos<=25) {
//         cargoAdicional= 50;
//     } else {
//         cargoAdicional= 25;
//     }
//     return (precioLitro*litroConsumidos) + cargoAdicional;

// }

// console.log(totalAPagar("coche", 26));



// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera:
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:


function precioSanguche (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precioBase;
    switch (base) {
        case "pollo":
            precioBase = 150; 
            break;
        case "carne":
            precioBase = 200;
            break;
        case "veggie":
            precioBase = 100;
            break;
        default:
            console.log("Error, ingrese un sanguche base valido");
            break;
    }

    let precioPan;
    switch (pan) {
        case "blanco":
            precioPan = 50;
            break;

        case "negro":
            precioPan = 60;
            break;

        case "s/gluten":
            precioPan = 75;
            break;

        default:
            console.log("Error, ingrese un valor de pan valido");
            break;
    }

    let precioIngrediente=0;
    if (queso){
        precioIngrediente += 20;
    }
    if (tomate){
        precioIngrediente += 15;
    }
    if (lechuga){
        precioIngrediente += 10;
    }
    if (cebolla){
        precioIngrediente += 15;
    }
    if (mayonesa){
        precioIngrediente += 5;
    }
    if (mostaza){
        precioIngrediente += 5;
    }

    return console.log("El precio del sanguche es: " + (precioBase + precioPan + precioIngrediente)); ;
    //return precioIngrediente;
}

console.log(precioSanguche("pollo", "negro", true, false, false, true, true, true)); 


