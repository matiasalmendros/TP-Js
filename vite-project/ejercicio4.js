//4. Funciones de JavaScript
//Ejercicio 1
function esPar(num) {
    return num % 2 == 0 ? true : false
}
let numParidad = 2
console.log("El numero, ", numParidad, "es par? ", esPar(numParidad))

//Ejercicio 2
function convertirCelsiusAFahrenheit(c) {
    return c * 1.8 + 32
}
let celsius = 30
console.log(`${celsius}°C son equivalentes a  ${convertirCelsiusAFahrenheit(celsius)}°F`)

