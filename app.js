// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let contador = 0

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value
    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre')
    } else {
        if (amigos.includes(nombreAmigo)){
            alert('El nombre ya se encuentra registrado, ingrese uno nuevo')
            document.getElementById('amigo').value = ''
        } else {
            amigos.push(nombreAmigo)
            document.getElementById('amigo').value = ''
            listaAmigos.innerHTML = amigos.join('<br>')
            contador++
        }
        
    }
}