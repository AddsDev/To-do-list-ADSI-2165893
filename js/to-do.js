const tarea = document.getElementById("tarea")
const add = document.getElementById("add")
const pendiente = document.getElementsByClassName("pendiente")


var tareas = []

add.onclick = () =>{
    var valor = tarea.value
    tareas.push(valor)
    var nuevo = document.createElement('div')
    var texto = document.createElement('p')
    var add = document.createElement('button')
    var remove = document.createElement('button')
    nuevo.classList = "card"
    texto.innerHTML = valor
    texto.classList = "card-title"
    add.innerHTML = "Check"
    add.classList = "card-button-add"
    remove.innerHTML = "Remove"
    remove.classList = "card-button-remove"
    nuevo.appendChild(texto)
    nuevo.appendChild(add)
    nuevo.appendChild(remove)
    pendiente[0].appendChild(nuevo)
    tarea.value = ""
    
}

function click(){
    alert("Hola")
}

