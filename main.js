let footer = document.getElementById("footer")
footer.classList.add("d-flex")
footer.classList.add("justify-content-around")

let footert1 = document.createElement("div")
//Primer titulo del footer
let titulofooter1 = document.createElement("h5") 
titulofooter1.textContent = "Biblioteca"

let descripcionfooter1 = document.createElement("p")
descripcionfooter1.textContent = `Biblioteca fisica y virtual. 
Desde cualquier lugar del mundo, puedes explorar 
nuestra vasta colección digital, acceder a cursos 
interactivos, leer e-books, disfrutar de audiolibros 
y participar en eventos en vivo. `


let descripcion2footer1 = document.createElement("p")
descripcion2footer1.textContent = "Dirección: Miguel muñoz 1243, Cipolletti - Rio Negro (Argentina)"

let descripcion3footer1 = document.createElement("p")
descripcion3footer1.textContent = "Code licensed MIT, docs CC BY 3.0."

footert1.append(titulofooter1, descripcionfooter1, descripcion2footer1, descripcion3footer1)

let footer2 = document.createElement("div")


//Segundo titulo del footer
let titulofooter2 = document.createElement("h5")
titulofooter2.textContent = "Titulo2"

footer2.appendChild(titulofooter2)
let ulfooter2 = document.createElement("ul")
let li1footer2 = document.createElement("li")
let a1li1footer2 = document.createElement("a")
a1li1footer2.textContent = "Inicio"
li1footer2.appendChild(a1li1footer2)

let li2footer2 = document.createElement("li")
let a2li2footer2 = document.createElement("a")
a2li2footer2.textContent = "Libros fisicos disponibles"
li2footer2.appendChild(a2li2footer2)

let li3footer2 = document.createElement("li")
let a3li3footer2 = document.createElement("a")
a3li3footer2.textContent = "Libros digitales"
li3footer2.appendChild(a3li3footer2)

let li4footer2 = document.createElement("li")
let a4li4footer2 = document.createElement("a")
a4li4footer2.textContent = "Audiolibro"
li4footer2.appendChild(a4li4footer2)

let li5footer2 = document.createElement("li")
let a5li5footer2 = document.createElement("a")
a5li5footer2.textContent = "Ubicación"
li5footer2.appendChild(a5li5footer2)
a1li1footer2.href = "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content"
a2li2footer2.href = "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content"
a3li3footer2.href = "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content"
a4li4footer2.href = "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content"
a5li5footer2.href = "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content"
ulfooter2.append(li1footer2, li2footer2, li3footer2, li4footer2, li5footer2)

footer2.appendChild(ulfooter2)


footer.append(footert1, footer2)


