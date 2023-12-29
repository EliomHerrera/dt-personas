
let lista = document.getElementById("lista")
let likes = document.getElementById("likes")
let dislikes = document.getElementById("dislikes")
let xnombre = document.getElementById("xnombre")
let indexSend = -1
let persona = []

function fnUpd() {
    persona = localStorage.getItem('persona')
    persona = JSON.parse(persona)

    lista.innerText = ""

    persona.forEach((e, i) => {
        lista.innerHTML += `
     <ul> 
        <h2>${e.name}</h2>
        <li>${e.link}</li>

            <button onclick="fnEdit(${i})" class="btn">Editar</button>
    </ul>
     `
    })
}

fnUpd()

function fnSend() {
    console.log(indexSend)
    if (likes.value != '') {
        persona[indexSend].likes.push(likes.value)

        localStorage.setItem('persona', JSON.stringify(persona))
    }

    if (dislikes.value != '') {
        persona[indexSend].dislikes.push(dislikes.value)

        localStorage.setItem('persona', JSON.stringify(persona))
    }

    fnUpd()

}

function fnEdit(index) {
    xnombre.textContent = persona[index].name
    indexSend = index

}