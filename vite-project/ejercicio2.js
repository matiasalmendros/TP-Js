//2. Operadores logicos y condicionales
//Ejercicio 1
function mayor() {
    let a = 10
    let b = 15
    let c = 37
    let mayor = 0
    if (a >= b && a >= c) {
        mayor = a
    } else if (b >= a && b >= c) {
        mayor = b
    } else {
        mayor = c
    }
    return mayor
}
console.log("El mayor de los 3 numeros es: ", mayor())

//Ejercicio 2
let paridad
let numero = prompt("Ingrese un numero y te dire si es par o impar")
numero % 2 == 0 ? paridad = "par" : paridad = "impar"
console.log("El numero ", numero, ", es ", paridad)