const tarea = document.getElementById("tarea")
const add = document.getElementById("add")
const pendiente = document.getElementsByClassName("pendiente")[0]
const terminada = document.getElementsByClassName('terminada')[0]

var tareas = []
var finalizadas = []

add.onclick = () =>{
    var valor = tarea.value
    
    addCard(valor, pendiente, true)
    saveCard(valor)
    tarea.value = ""
    
}
function saveCard(valor){
    tareas.push(valor)
}
function endCard(valor){
    finalizadas.push(valor) 
}
function addCard(valor, listado, botones){
    var card = botones ? cardButtons(newCard(valor)) : newCard(valor)
    listado.appendChild(card)
}
function cardButtons(card){
    var add = document.createElement('button')
    var remove = document.createElement('button')
    
    add.innerHTML = "&#9989;"
    add.classList = "card-button-add"
    remove.innerHTML = "&#10060;"
    remove.classList = "card-button-remove"

    card.appendChild(add)
    card.appendChild(remove)


    add.onclick = ()=>{
        let nCard = card.firstChild
        endCard(nCard.textContent)
        addCard(nCard.textContent, terminada, false)
        var padre = card.parentElement
        padre.removeChild(card)
    }

    return card
}

function newCard(valor){
    var nuevo = document.createElement('div')
    var texto = document.createElement('p')
    nuevo.classList = "card"
    texto.innerHTML = valor
    texto.classList = "card-title"
    nuevo.appendChild(texto)
    return nuevo
}

function click(){
    alert("Hola")
}

