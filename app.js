// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    const nombreAmigo = document.getElementById('amigo').value

    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre')
    } else {
        if (!isNaN(nombreAmigo) || /\d/.test(nombreAmigo)){
            alert('El valor insertado no es un nombre válido')
            document.getElementById('amigo').value = ''
        } else {
            if (amigos.includes(nombreAmigo)){
                alert('El nombre ya se encuentra registrado, ingrese uno nuevo')
                document.getElementById('amigo').value = ''
            } else {
                amigos.push(nombreAmigo)
                actualizarAmigos()
            }
        }        
        
    }
}

function actualizarAmigos(){
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    for (let i=0; i<amigos.length; i++){
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
        document.getElementById('amigo').value = ''
    }

}