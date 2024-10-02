//8. Eventos en DOM
//Ejercicio 1

let lista = document.querySelectorAll("#list li")
lista.forEach((e) => { e.addEventListener("click", () => { console.log(e.textContent) }) })

//Ejercicio 2
let deshabilitar = document.getElementById("deshabilitar")
let habilitar = document.getElementById("habilitar")
let dato = document.getElementById("dato")
deshabilitar.addEventListener("click", () => { dato.disabled = true })
habilitar.addEventListener("click", () => { dato.disabled = false })