//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.

const banco = {
  clientes: arrayCuentas,
  // Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i];
      }
    }
  },
  
/*
3.
Crear otro método llamado depósito, 
que recibirá dos parámetros, el titular de cuenta 
y una cantidad de dinero a depositar. 
El método debe obtener a la cuenta correspondiente 
y luego sumar la cantidad de dinero a depositar a saldo en pesos. 
Luego, deberá dar un aviso por la consola con el mensaje 
“Depósito realizado, su nuevo saldo es: xxx”.
*/

  deposito: function(titularDinero, cantDinero){
    cliente = this.consultarCliente(titularDinero)
    cliente.saldoEnPesos += cantDinero
    console.log("Depósito realizado, su nuevo saldo es: " + cliente.saldoEnPesos);
  },

/*
4.
Crear un último método llamado extracción, 
que recibirá también dos parámetros: 
el titular de cuenta y el monto a extraer. 
El método debe obtener la cuenta correspondiente 
y restar el monto al saldo actual. 
En caso de que el resultado sea menor a 0, 
deberá imprimir un mensaje por la consola de “Fondos insuficientes”, 
de lo contrario deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: xxx”.
*/

  extraccion: function(titularDinero, cantDinero){
    cliente = this.consultarCliente(titularDinero)
    if(cliente.saldoEnPesos >= cantDinero){
      cliente.saldoEnPesos -= cantDinero
      console.log("Extracción realizada correctamente, su nuevo saldo es: " + cliente.saldoEnPesos);
    } else{
      console.log("Fondos insuficientes");
    }
  },

};
 
banco.deposito("Ramon Connell",1000)
console.log(arrayCuentas[1])
banco.extraccion("Ramon Connell",9675)



// Crear una función llamada propiedadUnica, que reciba un arreglo de objetos como parámetro y un string. 
// Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 
// Ejemplo: 
// let  array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]


let  array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49}, { nombre: "Juli", edad: 20}, { nombre: "Martu", edad: 22} ]

// Sin terminar
function propiedadUnica(array, propiedad){
  listaNueva = []
  for (let i = 0; i < array.length; i++) {
    let objeto = {[propiedad]: array[i][propiedad]}
    listaNueva.push(objeto)
  }
  return listaNueva
}

//console.log(propiedadUnica(array,"edad"));



// Crear el objeto “alumno”, el cual va a consistir en las siguientes propiedades básicas:
// Nombre
// Número de legajo
// Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación 
// que le va a ser dada. Para este ejercicio, vamos a dejar que pienses todos los métodos y propiedades que 
// puedan hacer falta para que el programa funcione correctamente de la manera solicitada.


const alumno = {
  nombre: "Pepe Argento",
  numeroLegajo: 12345,
  listaNotas: [9, 4, 4, 7, 8],
  promedio:"",
  aprobado:"",

  calcularPromedio: function () {
    let sumatoria = 0;
    for (let i = 0; i < this.listaNotas.length; i++) {
      sumatoria += this.listaNotas[i]
      
    }

    this.promedio = sumatoria/this.listaNotas.length;

  },

  aprobo: function (notaAprueba) {
    this.calcularPromedio();
    if (this.promedio >= notaAprueba) {
      this.aprobado = true;
    } else {
      this.aprobado = false;
    }
  }
}

alumno.calcularPromedio();


console.log(alumno.promedio);

alumno.aprobo(6)
console.log(alumno.aprobado);

console.log(alumno);