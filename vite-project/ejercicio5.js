//5. Objetos en JavaScript
//Ejercicio 1
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad: function (ciudad2) {
        this.ciudad = ciudad2
    }
}
persona.cambiarCiudad("Barcelona")
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`)

//Ejercicio 2
let libro = {
    titulo: "El Quijote",
    autor: "Pepe",
    anio: 11,
    antiguedad: function () {
        return this.anio > 10 ? true : false
    }
}
console.log(`El libro "${libro.titulo}" es antiguo:${libro.antiguedad()}`)
