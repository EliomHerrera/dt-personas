
let nombre = document.getElementById("nombre")
let vinculo = document.getElementById("vinculo")

let persona = []

function fnUpd() {

    if (localStorage.getItem('persona') == null) {
        localStorage.setItem('persona', JSON.stringify(persona))
    }

    persona = localStorage.getItem('persona')
    persona = JSON.parse(persona)

}

fnUpd()

function fnSend() {
    persona.push({
        name: nombre.value,
        link: vinculo.value,
        likes: [],
        dislikes: []
    })

    localStorage.setItem('persona', JSON.stringify(persona))
    fnUpd()
}




