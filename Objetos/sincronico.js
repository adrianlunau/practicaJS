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
    // consultarCliente2: function (titular) {
    //   let i = 0;
    //   while (
    //     titular !== this.clientes[i].titularCuenta &&
    //     i < this.clientes.length
    //   ) {
    //     i++;
    //   }
    //   if (titular === this.clientes[i].titularCuenta) {
    //     return this.clientes[i];
    //   }
    // },
  };
  
  // console.log(banco.clientes);
  let clienteEncontrado = banco.consultarCliente("Jarret Lafuente");
  console.log(clienteEncontrado);
  let clienteEncontrado2 = banco.consultarCliente2("Ansel Ardley");
  console.log(clienteEncontrado2);