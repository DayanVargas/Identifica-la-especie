let animalSecreto = '';
let intentos = 0;
let listaAnimalesMostrados = [];

const animales = [
    { nombre: 'Osteoglossum ferreirai', imagen: './img/OFerreirai.png'},
    { nombre: 'Arapaima gigas', imagen: './img/AGigas.png' },
    { nombre: 'Osteoglossum bicirrhosum', imagen: './img/OBicirrhosum.png' },
    { nombre: 'Anchoa lyolepis', imagen: './img/ALyolepis.png' },
    { nombre: 'Anchoa cayorum', imagen: './img/Acayorum.png' },
    { nombre: 'Anchoa trinitatis', imagen: './img/ATrinitatis.png' },
    { nombre: 'Anchoa colonensis', imagen: './img/AColonensis.png' },
    { nombre: 'Anchoa lamprotaenia', imagen: './img/ALamprotaenia.png' },
    { nombre: 'Lycengraulis grossidens', imagen: './img/LGrossidens.png' },
    { nombre: 'Lycengraulis batesii', imagen: './img/LBatesii.png' },
    { nombre: 'Anchovia clupeoides', imagen: './img/AClupeoides.png' },
    { nombre: 'Cetengraulis edentulus', imagen: './img/CEdentulus.png' },
    { nombre: 'Odontognathus mucronatus', imagen: './img/OMucronatus.png' },
    { nombre: 'Odontognathus compressus', imagen: './img/OCompressus.png' },
    { nombre: 'Pellona harroweri', imagen: './img/PHarroweri.png' },
    { nombre: 'Pellona castelnaeana', imagen: './img/PCastelnaeana.png' },
    { nombre: 'Harengula clupeola', imagen: './img/HClupeola.png' },
    { nombre: 'Harengula jaguana', imagen: './img/HJaguana.png' },
    { nombre: 'Harengula humeralis', imagen: './img/HHumeralis.png' },
    { nombre: 'Opisthonema oglinum', imagen: './img/Ooglinum.png' },
    { nombre: 'Sardinella aurita', imagen: './img/SAurita.png' },
    { nombre: 'Jenkinsia lamprotaenia', imagen: './img/JLamprotaenia.png' },
    { nombre: 'Jenkinsia stolifera', imagen: './img/JStolifera.png' },
    { nombre: 'Etrumeus sadina', imagen: './img/ESadina.png' },
    // ...agrega más si tu grupo lo requiere...
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
