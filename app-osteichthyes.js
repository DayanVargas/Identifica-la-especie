//Variables
let animalSecreto = '';
let intentos = 0;
let listaAnimalesMostrados = [];

const animales = [
    { nombre: 'Elops smithi', imagen: './img/HSmithi.png' },
    { nombre: 'Megalops atlanticus', imagen: './img/MAtlanticus.png' },
    { nombre: 'Albula nemoptera', imagen: './img/ANemoptera.png' },
    { nombre: 'Albula vulpes', imagen: './img/AVulpes.png' },
    { nombre: 'Halosaurus ovenii', imagen: './img/HOvenii.png' },
    { nombre: 'Anguilla rostrata', imagen: './img/ARostrata.png' },
    { nombre: 'Chanonmuraena vittata', imagen: './img/CVittata.png' },
    { nombre: 'Muraena robusta', imagen: './img/MRobusta.png' },
    { nombre: 'Monopenchelys acuta', imagen: './img/MAcuta.png' },
    { nombre: 'Echidna catenata', imagen: './img/ECatenata.png' },
    { nombre: 'Echidna nigricans', imagen: './img/ENigricans.png' },
    { nombre: 'Enchelycore carychroa', imagen: './img/ECarychroa.png' },
    { nombre: 'Gymnothorax funebris', imagen: './img/GFunebris.png' },
    { nombre: 'Gymnothorax ocellatus', imagen: './img/GOcellatus.png' },
    { nombre: 'Gymnothorax compresus', imagen: './img/GCompresus.png' },
    { nombre: 'Gymnothorax moringa', imagen: './img/GMoringa.png' },
    { nombre: 'Gymnothorax miliaris', imagen: './img/GMiliaris.png' },
    { nombre: 'Uropterygius macularius', imagen: './img/UMacularius.png' },
];

console.log(animales);

//Funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function ocultarImagenAnimal() {
    let imagenElemento = document.querySelector('#imagenAnimal');
    imagenElemento.style.opacity = '0';
}

function mostrarImagenAnimal(imagenURL){
    let imagenElemento = document.querySelector('#imagenAnimal');
    imagenElemento.setAttribute('src', imagenURL);
    imagenElemento.style.opacity = '1';
}

function verificarIntento () {
    let respuestaUsuario = document.getElementById('valorUsuario').value;

    if (respuestaUsuario == animalSecreto) {
        asignarTextoElemento('p', `Correcto! Has identificado al ${animalSecreto} en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}.🥳`);
        limpiarCaja();
        ocultarImagenAnimal(); // Ocultar imagen actual

        //Verificar si quedan más animales
        if (listaAnimalesMostrados.length == animales.length) {
            asignarTextoElemento('p', '¡Has identificado todos los animales! 🎉');
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //Mostrar siguiente animal
            setTimeout(() => {
                animalSecreto = generarAnimalSecreto();
                asignarTextoElemento('p', `¿Qué animal aparece en la imagen?`);
                intentos = 1; // Reiniciar intentos para el siguiente animal
            }, 2000); // Esperar 2 segundos antes de mostrar el siguiente animal
        }
    } else {
        //El usuario no acertó el nombre
        asignarTextoElemento('p', 'Incorrecto! Inténtalo de nuevo.');
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarAnimalSecreto(){
    if (listaAnimalesMostrados.length == animales.length) {
        asignarTextoElemento('p', 'Ya no hay más animales para mostrar');
        return;
    }

    let indice;
    do {
        indice = Math.floor(Math.random() * animales.length);
    } while (listaAnimalesMostrados.includes(indice));

    listaAnimalesMostrados.push(indice);
    let animal = animales[indice];
    animalSecreto = animal.nombre;
    mostrarImagenAnimal(animal.imagen);
    return animal.nombre;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego de identificar la especie: Osteichthyes');
    asignarTextoElemento('p', `¿Qué animal aparece en la imagen?`);
    animalSecreto = generarAnimalSecreto();
    intentos = 1;

    // Activar verificarIntento con Enter
    const input = document.getElementById('valorUsuario');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            verificarIntento();
        }
    });
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();