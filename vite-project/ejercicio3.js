//3. Operadores de asignacion y bucles
//Ejercicio 1

let i = 10
while (i > 0) {
    console.log(i)
    i -= 1
}

//Ejercicio 2
let num
do {
    num = prompt("Ingrese un numero mayor a 100 por favor")
} while (num <= 100);
console.log("El numero que ingresaste es mayor a 100: ", num)