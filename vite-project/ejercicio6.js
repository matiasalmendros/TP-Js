//6. Arrays
//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosx2 = numeros.map(e => e * 2)
console.log(`Numeros originales: ${numeros}`)
console.log(`Numeros multiplicados por 2: ${numerosx2}`)

//Ejercicio 2
let pares = []
let k
for (k = 1; k <= 20; k++) {
    if (k % 2 == 0) {
        pares.push(k)
    }
}
console.log(`Primeros 10 numeros pares: ${pares}`)