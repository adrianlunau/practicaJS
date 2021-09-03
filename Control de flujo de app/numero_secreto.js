// Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto
// retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

function esNumeroSecreto(numero) {
    numeroAleatorio = Math.floor(Math.random()*(10-0))+0;
    
    if (numero===numeroAleatorio){
        return "Felicitaciones acertaste!! el numero secreto es: " + numeroAleatorio;
    } else {
        return "Esta vez no acertaste, pero continua intentando!, el numero secreto es: " + numeroAleatorio;
    }
    
}

console.log(esNumeroSecreto(2));