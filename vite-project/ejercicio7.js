//7. Introduccion al DOM
//Ejercicio 1
let botonAzul = document.getElementById("boton_azul")
let parrafos = document.getElementById("parrafos")
botonAzul.addEventListener("click", () => { parrafos.classList.add("parrafos") })

//Ejercicio 2.
let texto = document.getElementById("texto")
let botonAlert = document.getElementById("boton_alert")
botonAlert.addEventListener("click", () => { alert(`Has ingresado: ${texto.value}`) })