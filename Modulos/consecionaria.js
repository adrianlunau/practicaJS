const jsonHelper = require(`./jsonHelper.js`);


const consecionaria = {
    autos: jsonHelper.leerJson(`AUTOS`),

    agregarAutos: function (marca, modelo, anio, precio, patente) {
        let array = this.autos
        for (let i = 0; i < array.length; i++) {
            let a = this.autos[i]
            if (a.patente === patente) {
                return "El auto que quiere ingresar ya se encuentra en los registros"
            }
        }
        auto = {
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: false
        }
        this.autos.push(auto)
        jsonHelper.escribirJson(`AUTOS`, this.autos)

        return "Vehiculo agregado correctamente"

    },
    venderAuto: function (patente) {

        for (let i = 0; i < this.autos.length; i++) {
            let auto = this.autos[i]

            if (auto.patente === patente) {
                auto.vendido = true;
                jsonHelper.escribirJson("AUTOS", this.autos)
            }

        }

    },

    totalDeVentas: function () {
        let array = this.autos
        let sumatoria = 0;
        for (let i = 0; i < array.length; i++) {
            let auto = array[i]
            if (auto.vendido) {
                sumatoria += auto.precio
            }

        }
        return sumatoria;
    },

    eliminarAuto: function (patente) {
        for (let i = 0; i < this.autos.length; i++) {
            let auto = this.autos[i]

            if (auto.patente === patente) {
                this.autos.splice(i, 1)
            }
        }
        jsonHelper.escribirJson("AUTOS", this.autos)
        return "El auto ha sido eliminado con exito."
    }
}

//console.log(consecionaria.agregarAutos("Ford", "sierra", 1980, 100000, "IOO111"));

console.log(consecionaria.eliminarAuto("IOO111"));