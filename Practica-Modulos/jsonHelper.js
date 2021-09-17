const fs = require("fs");


jsonHelper = {
    
    escribirJson: function (nombreArchivo, datos) {

        fs.writeFileSync(`./${nombreArchivo}.json`, JSON.stringify(datos))
    },

    leerJson: function (nombreArchivo) {
        return JSON.parse(fs.readFileSync(`./${nombreArchivo}.json`, "utf-8"))
    }

    
}

module.exports = jsonHelper;

