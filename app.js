// Array para almacenar los nombres de los amigos //
let amigos = [];

// Función para agregar un amigo a la lista //
function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        input.value = ''; // Limpia el campo de entrada //
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para actualizar la lista de amigos en la interfaz //
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizar //

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto //
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}