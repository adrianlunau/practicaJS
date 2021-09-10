const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [{
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// 1- 
// Crear un objeto literal que represente la inmobiliaria (es decir llamado:
// inmobiliaria)
// Este objeto contendrá, una propiedad con el listado de departamentos y las
// funcionalidades que nos solicitan a continuación:

const inmobiliaria = {


  // A
  departamentos: departamentos,
  // B
  listarDepartamentos: function (array) {

    for (let i = 0; i < array.length; i++) {
      let depto = array[i]
      let disponible = array[i].disponible ? "Disponible" : "Alquilado"
      let mascotas = depto.aceptaMascotas ? "Acepta mascotas" : "No acepta mascotas"
      console.log(`El ID: ${depto.id}, Precio de alquiler: ${depto.precioAlquiler}, ${disponible}, Cantidad de ambientes: ${depto.cantidadHabitacion}, Cantidad maxima de personas: ${depto.cantidadPersonas}, ${mascotas}, ${depto.propietarios}`);

    }
  },
  // C
  departamentosDisponibles: function () {
    let array = this.departamentos
    let deptosDisponibles = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].disponible) {
        deptosDisponibles.push(array[i])
      }

    }
    return deptosDisponibles;
  },

  // D

  buscarPorId: function (idABuscar) {
    let array = this.departamentos

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === idABuscar) {
        return array[i]
      }

    }
    return `El ID: ${idABuscar} no se encuentra en los registros`
  },

  // E
  buscarPorPrecio: function (precio) {

    let array = this.departamentosDisponibles()
    let resultado = [];


    for (let i = 0; i < array.length; i++) {
      if (array[i].precioAlquiler <= precio) {
        resultado.push(array[i])
      }

    }
    return resultado;
  },

  // F

  precioConImpuesto: function (porcentaje) {
    
    let auxiliar = porcentaje / 100 +1;
    

    for (let i = 0; i < this.departamentos.length; i++) {
     
      this.departamentos[i].precioAlquiler *= auxiliar
      console.log(this.departamentos[i].precioAlquiler);
    }
    return this.departamentos;
    
  },

  // G

  simplificarPropietarios: function () {
    let array = this.departamentos;
    string = ""

    for (let i = 0; i < array.length; i++) {
      let indice = array[i].propietarios.indexOf(":")
      let nombres = array[i].propietarios.slice(indice, 100)
      array[i].propietarios = "Prop." + nombres
      
    }
    return this.listarDepartamentos(array)
  },

  alquilar: function (id) {
    let dpto = this.buscarPorId(id)
    dpto.disponible = false;
    
    return dpto 
  }


}










/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{
  alumno: nombre,
  tema: tema
}]);



console.log(v, "\n" + oo + "   B. listarDepartamentos");
inmobiliaria.listarDepartamentos(departamentos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
console.log(inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles()));



console.log(o);

console.log(v, oo + " D. buscarPorId");
console.log(inmobiliaria.buscarPorId(4));


console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");

console.log(inmobiliaria.listarDepartamentos(inmobiliaria.buscarPorPrecio(4000)));


console.log(o);

console.log(v, oo + " F. precioConImpuesto");

inmobiliaria.listarDepartamentos(inmobiliaria.precioConImpuesto(10));

console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
inmobiliaria.simplificarPropietarios()
console.log(o);


console.log(v, oo + " 2.A. alquilar");
console.log(inmobiliaria.alquilar(4));

console.log(o);