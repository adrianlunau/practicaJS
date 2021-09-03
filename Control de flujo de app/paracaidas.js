// Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h
// ● La altura debe ser mayor o igual a 2000m y menor a 3000m

function abrirParacidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura <= 3000) {
        return "El paracaidas puede abrirse"
    } else {
        return "El paracaidas no puede abrirse"
    }
}

console.log(abrirParacidas(200, 2100)); 

