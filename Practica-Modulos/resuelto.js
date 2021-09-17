const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
/*  =================================================================

Te proveemos la siguiente plantilla que tiene tres partes:
 - Array de objetos que está colapsado aquí debajo.
 - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
 - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados 
================================================================= */
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const jsonHelper = require ("./jsonHelper")



/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const inmobiliaria = {
  // A
  departamentos: jsonHelper.leerJson("DEPARTAMENTOS"),
  // B
  listarDepartamentos: function (arrDeptos) {
    for (let i = 0; i < arrDeptos.length; i++) {
      let disponible = arrDeptos[i].disponible ? "disponible" : "alquilado";
      let aceptaMascotas = arrDeptos[i].aceptaMascotas
        ? "acepta mascotas"
        : "no acepta mascotas";
      console.log(
        `id: ${arrDeptos[i].id}, precio: $ ${arrDeptos[i].precioAlquiler}, está ${disponible}, ` +
          `${arrDeptos[i].ambientes} ambiente${
            arrDeptos[i].ambientes > 1 ? "s" : ""
          }, máximo ${arrDeptos[i].cantidadPersonas}` +
          `personas, ${aceptaMascotas}, propietarios: ${arrDeptos[i].propietarios}`
      );
    }
  },
  // C
  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },
  // D
  buscarPorId: function (id) {
    let depto;
    let mensajeError =
      "No se encontro ningun departamento con el identificador: " + id;
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === id) {
        depto = this.departamentos[i];
      }
    }
    return depto ? depto : mensajeError;
  },
  // E
  buscarPorPrecio: function (alquiler) {
    let deptosResultado = [];
    let mensajeError =
      "No se encontraron departamentos con alquileres menores a: $" + alquiler;
    let disponibles = this.departamentosDisponibles();
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= alquiler) {
        deptosResultado.push(disponibles[i]);
      }
    }
    if (deptosResultado.length > 0) {
      return deptosResultado;
    } else {
      return mensajeError;
    }
  },
  // F
  precioConImpuesto: function (porcentaje) {
    let aux = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler *= aux;
    }
    jsonHelper.escribirJson("DEPARTAMENTOS", this.departamentos)
    return "Se aplicaron los impuestos";
  },
  // G
  simplificarPropietarios: function () {
    for (let i = 0; i < this.departamentos.length; i++) {
      let losPropietarios = this.departamentos[i].propietarios;
      let desde = losPropietarios.indexOf(":");
      let soloPropietarios = losPropietarios.slice(desde);
      this.departamentos[i].propietarios = "Prop." + soloPropietarios;
    }
    jsonHelper.escribirJson("DEPARTAMENTOS", this.departamentos)
    return this.departamentos;
  },

  // mesas de trabajo
  // A
  alquilarDepartamento: function (id) {
    let mensaje;
    let mensajeError =
      "No se encontro ningun departamento con el identificador: " + id;
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === id) {
        this.departamentos[i].disponible = false;
        mensaje = "Departamento alquilado correctamente";
      }
    }
    if (mensaje) {
      jsonHelper.escribirJson("DEPARTAMENTOS", this.departamentos)
      return mensaje;
    } else {
      return mensajeError;
    }
  },
  // B
  filtrarPetFriendly: function () {
    let petFriendlyDptos = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].aceptaMascotas) {
        petFriendlyDptos.push(this.departamentos[i]);
      }
    }
    return petFriendlyDptos;
  },
  // C
  rebajasPorNoAlquiler: function () {
    let disponibles = this.departamentosDisponibles();
    const descuento = 0.9;
    let rebajados = [];
    for (let i = 0; i < disponibles.length; i++) {
      rebajados.push((disponibles[i].precioAlquiler *= descuento));
    }
    jsonHelper.escribirJson("DEPARTAMENTOS", this.departamentos)
    return rebajados;
  },
  // D
  buscarPorPropietarios: function (propietarios) {
    let filtrados = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].propietarios.indexOf(propietarios) != -1) {
        filtrados.push(this.departamentos[i]);
      }
    }
    return filtrados;
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
// console.table([{ alumno: nombre, tema: tema }]);

// console.log(v, "\n" + oo + "   B. listarDepartamentos");
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
// console.log(o);

// console.log(v, oo + "   C. departamentosDisponibles");
// console.log(inmobiliaria.departamentosDisponibles());
// console.log(o);

// console.log(v, oo + " D. buscarPorId");
// console.log(inmobiliaria.buscarPorId(3));
// console.log(o);

// console.log(v, oo + "  E. buscarPorPrecio");
// console.log(inmobiliaria.buscarPorPrecio(1000));
// console.log(o);

// console.log(v, oo + " F. precioConImpuesto");
// inmobiliaria.precioConImpuesto(30);
// console.log(o);

// console.log(v, oo + " G. simplificarPropietarios");
// inmobiliaria.simplificarPropietarios();
// console.log(o);

// // MESAS DE TRABAJO

// console.log(v, oo + " A. alquilarDepartamento");
// console.log(inmobiliaria.alquilarDepartamento(4));
// console.log(o);

// console.log(v, oo + " B. filtrarPetFriendly");
// console.log(inmobiliaria.filtrarPetFriendly());
// console.log(o);

// console.log(v, oo + " C. rebajasPorNoAlquiler");
// console.log(inmobiliaria.rebajasPorNoAlquiler());
// console.log(o);

// console.log(v, oo + " D. buscarPorPropietarios");
// console.log(inmobiliaria.buscarPorPropietarios("Luis Perez"));
// console.log(o);
