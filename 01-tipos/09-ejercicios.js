
/**
 * EJERCICIO 1:
 * En este primer ejercicio vamos a definir variables, realizaremos una carta de identificación 
 * en la que colocaremos datos de un usuario, pero tendremos que definir ya sea con { let } 
 * o con { const } dependiendo de que si el dato puede modificarse o no.Los datos que definiremos son: 
 * nombre, apellido, fecha de nacimiento, dirección, edad, país de nacimiento, 
 * y si tiene una suscripción activa en la Academia Hola Mundo. Al final, deberás imprimir
 * todos estos datos de manera que podamos leerlos en la consola.
 */

const nombre = "Angelo";
const apellido = "Rivera";
const fecNacimiento = "06 de Julio, 1998";
let direccion = "Una Calle 123"
let edad = 28;
const paisOrigen = "Chile";
let suscripcionActiva = true;

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Fecha de nacimiento: " + fecNacimiento);
console.log("Dirección :" + direccion);
console.log("Edad: "+edad);
console.log("Pais de nacimiento: " + paisOrigen);
console.log("Suscripcion activa: " + suscripcionActiva);

//-----------------------------------------------------------------------------------------------

/**
 * EJERCICIO 2:
 * En este ejercicio, vamos a editar las estadísticas de un jugador de fútbol, en una variable que se 
 * llamará { pasesJugador }, lo cual definiremos en una variable que el valor inicial de los pases de 
 * este jugador será { null }, ya que este no tendrá pases inicialmente.Lo siguiente será asignar a 
 * esta variable un número de pases, el cual será 18.Posteriormente, ya no necesitamos el número de pases, 
 * sino la efectividad de sus pases, por lo que en una siguiente línea cambiaremos el valor a un valor 
 * en %, este será el valor de 87%.Asegurate de imprimir en la consola cada uno de estos cambios.
 */

let pasesJugador = null;
console.log(pasesJugador);

pasesJugador = 18;
console.log(pasesJugador);

pasesJugador = "87%"
console.log(pasesJugador);

//-----------------------------------------------------------------------------------------------

/**
 * EJERCICIO 3:
 * Para este ejercicio, tendremos que definir una lista de compras, pagos y pendientes, cada  
 * uno de estos pendientes deberá ser un string. Para los siguientes ejemplos de listas:
 * - Haremos una lista de compras.
 * - Una de deseos de compra.
 * - Una de pendientes
 * Al final deberemos imprimir cada una de nuestras listas
 */

let listaCompras = ["Pollo", "Carne", "Huevos", "Pan", "Leche"];
let listaDeseos = ["PC Gamer", "Monitor 2k OLED", "Yamaha MT-07", "Yamaha R1"];
let listaPendientes = ["Estudiar para base de datos", "Estudiar Inglés", "Estudiar Kotlin"];

console.log(listaCompras);
console.log(listaDeseos);
console.log(listaPendientes);

//-----------------------------------------------------------------------------------------------

/**
 * EJERCICIO 4
 * En este ejercicio, nuestra tarea es definir una lista que tendrá el stock de los productos. 
 * Deberás generar un array y colocar por lo menos 2 artículos cuyo valor no ha sido agregado.
 * Vamos a imprimir esta lista después de su definición
 */

let stockProductos = [
    5, null, 12, null, null, 22, 4
];

console.log(stockProductos);

//-----------------------------------------------------------------------------------------------

/**
 * EJERCICIO 5
 * Para este ejercicio vamos a tomar los datos que hemos usado para el ejercicio 1 de esta sección, 
 * pero ahora, en lugar de ser variables separadas, vamos a colocarlas en un objeto, ya que este 
 * formato será el que utilizaremos para trabajar con los datos de nuestros usuarios.Al final, 
 * igualmente vamos a imprimir este objeto llamado { usuario } en nuestra consola.
 */

const usuario = {
    nombre : "Angelo",
    apellido : "Rivera",
    fecNacimiento : "06 de Julio, 1998",
    direccion : "Una Calle 123",
    edad : 28,
    paisOrigen : "Chile",
    suscripcionActiva : true,
}

console.log(usuario);