let animalSecreto = '';
let intentos = 0;
let listaAnimalesMostrados = [];

const animales = [
    { nombre: 'Rhizoprionodon terranovae', imagen: './img/RTerr.png'},

    // ...agrega más si tu grupo lo requiere...
];

// Copia aquí el resto de tus funciones (asignarTextoElemento, mostrarImagenAnimal, verificarIntento, etc.)
// Puedes copiar y pegar desde tu app.js

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
        //El usuario no acertó el número secreto
        if (respuestaUsuario != animalSecreto){
        asignarTextoElemento('p', 'Incorrecto! Inténtalo de nuevo.');
        intentos++;
        limpiarCaja();
    }
}}

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
    asignarTextoElemento('h1', 'Juego de identificar la especie');
    asignarTextoElemento('p', `¿Que animal aparece en la imagen?`);
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
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar en número de intentos
    condicionesIniciales();
    // //Habilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();


