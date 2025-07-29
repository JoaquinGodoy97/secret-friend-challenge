// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Fucionalidades:
// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo
//  agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará
//  una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista
//  debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará
//  aleatoriamente un nombre de la lista y se mostrará en la página.


const listaAmigos = document.getElementById('listaAmigos');
const amigo = document.getElementById('amigo');
const amigosAgregados = [];

const resultado = document.getElementById('resultado');

function limpiarValor() {
    amigo.value = ""; 
}

function actualizarLista() {
    listaAmigos.innerHTML = ""; // clean list

    for (let i = 0; i < amigosAgregados.length; i++) {
        let nuevoAmigoFormateado = document.createElement('li');
        nuevoAmigoFormateado.textContent = amigosAgregados[i];
        listaAmigos.appendChild(nuevoAmigoFormateado);
    }
}

function agregarAmigo() {

    if (amigo.value) {
        amigosAgregados.push(amigo.value);
        actualizarLista();

    } else {
        alert("Ingresar un nombre válido.");
    }

    limpiarValor(); // clean value
}

function sortearAmigo() {
    const numeroRandomLimitado = Math.floor(Math.random() * amigosAgregados.length); 
    const amigoRandom = amigosAgregados[numeroRandomLimitado];
    resultado.innerHTML = amigoRandom;
}