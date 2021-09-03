let cajonPantalones = "remeras";
let cajonRemeras = "pantalones";

console.log(cajonRemeras);
console.log(cajonPantalones);


let cajonVacio = cajonPantalones;
cajonPantalones = cajonRemeras;
cajonRemeras = cajonVacio;
cajonVacio = null;

console.log(cajonRemeras);
console.log(cajonPantalones);
