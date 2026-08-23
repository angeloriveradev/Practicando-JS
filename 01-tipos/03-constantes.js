// A las variables 'let' se les puede cambiar el valor.
let nombre = "Hola Mundo";
nombre = "Se puede cambiar la variable"

console.log(nombre);

// A las constantes no se le puede cambiar el valor.
const animal = "Perro";
// animal = "Gato"
// Al intentarlo lanza un TypeError.

console.log(animal)

/*  Como regla general nunca deberiamos cambiar el valor de una variable,
    por lo que es una buena practica utilisar 'cosnt' salvo 
    que la situacion amerite cambiar el valor de dicha variable
    utilizaremos en ese caso 'let'. */