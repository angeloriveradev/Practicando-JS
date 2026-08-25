// Short-circuit

// Valores que devuelven falso

// false
// 0
//''
//null
//undefine
//NaN

// let nombre = ''
// let username = nombre || 'Anonimo'
// console.log(username) // Devuelve 'Anonimo' ya que el campo vacío es false.

let nombre = 'Mi nombre';
let username = nombre || 'Anonimo';
console.log(username);  // Devuelve 'Mi nombre' ya que es la primera sentencia.

// Si ocupamos && es para ejecutar funciones siempre y cuando la primera sea true.

function fn1(){
    console.log("Soy funcion 1");
    return true;
}

function fn2(){
    console.log("Soy funcion 2");
    return true;
}

let x = fn1() && fn2();