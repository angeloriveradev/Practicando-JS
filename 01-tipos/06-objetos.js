/**
 * Son variables de referencia (No primitivos).
 * agrupacion de datos que hacen sentido tenerlos juntos.
 */

let lapiz = {       // llave:valor
    color: "Rojo",  // propiedad:valor
    marca: "Bic",
    precio: 990,
};

console.log(lapiz);
console.log(lapiz.color);       //Forma para mostrar una propiedad.
console.log(lapiz['color']);    //Otra forma menos comun.

lapiz.color = "Azul";   //Modificar valor de propiedad.
console.log(lapiz.color);

delete lapiz.marca;

console.log(lapiz)