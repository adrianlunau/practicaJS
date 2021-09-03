// function reemplazoFastFast (texto, palabra, palabraNueva){
//     return texto.replace(palabra, palabraNueva)
// }

// console.log(reemplazoFastFast("Hola pepe", "pepe", "jose"));


// function menciona (texto, palabra){
//     if(texto.indexOf(palabra)>=0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(menciona("Hola don pepito, hola don jose.", "hola"));

// let frase = 'Hola!, soy Carli';
// let licenciada = frase.slice(11, 16);

// console.log(licenciada);

// let arrayFrase = [
//     "No",
//     "he",
//     "fracasado,",
//     "simplemente",
//     "me",
//     "he",
//     "topado",
//     "con",
//     "diez",
//     "mil",
//     "soluciones",
//     "equivocadas"
//   ];

//   let fraseNueva = arrayFrase.join(" ");

//   console.log(fraseNueva);

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

//  estudiantes.push({nombre: "Juan", promedio: 5, curso: "iOS"})
//  estudiantes.push({nombre: "Miguel", promedio: 2, curso: "Android"})

//  let alumnoDeBaja = estudiantes[0];
//  estudiantes.shift();

estudiantes.unshift({nombre: "Mariana", promedio: 9, curso: "Full Stack"}, {nombre: "Francisco", promedio: 2, curso: "Android"});

// console.log(estudiantes);


 let str = "un string cualquiera"
 let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
 "123","false", 54, true, str] ]
 console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])