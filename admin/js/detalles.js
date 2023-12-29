
let lista = document.getElementById("lista")
let detalles = document.getElementById("detalles")

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

            <button onclick="fnVer(${i})" class="btn">Ver</button>
    </ul>
     `
    })
}

fnUpd()

function fnVer(index) {
    detalles.innerHTML = ``

    let arrLikes = persona[index].likes
    let arrDislikes = persona[index].dislikes

    for (let [num, i1] of Object.entries(arrLikes)) {
        detalles.innerHTML += `
            <li> ${num} - likes: ${i1}</li>
        `
    }

    for (let [num, i1] of Object.entries(arrDislikes)) {
        detalles.innerHTML += `
            <li> ${num} - dislike: ${i1}</li>
        `
    }


}