function palabraSecreta(contrasenia) {
    let palabraSecreta = "JavaScript"
    if (contrasenia === "JavaScript") {
        return "Contraseña correcta, pase por favor";
    } else {
        return "Contraseña incorrecta, verifique y vuelva a intentar mas tarde";
    }
}

palabraSecreta("hola");

