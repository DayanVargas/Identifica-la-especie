let animalSecreto = '';
let intentos = 0;
let listaAnimalesMostrados = [];

const animales = [
    { nombre: 'Eugerres plumieri', imagen: './img/img1.png'},
    { nombre: 'Eucinostomus melanopterus', imagen: './img/img2.png' },
    { nombre: 'Gerres cinereus', imagen: './img/img3.png' },
    { nombre: 'Eucinostomus gula', imagen: './img/img4.png' },
    { nombre: 'Eucinostomus harengulus', imagen: './img/img5.png' },
    { nombre: 'Eucinostomus argenteus', imagen: './img/img6.png' },
    { nombre: 'Eucinostomus havana', imagen: './img/img7.png' },
    { nombre: 'Diapterus auratus', imagen: './img/img8.png' },
    { nombre: 'Diapterus rhombeus', imagen: './img/img9.png' },
    { nombre: 'Conodon nobilis', imagen: './img/img10.png' },
    { nombre: 'Anisotremus surinamensis', imagen: './img/img11.png' },
    { nombre: 'Brachygenys chrysargyrea', imagen: './img/img12.png' },
    { nombre: 'Anisotremus virginicus', imagen: './img/img13.png' },
    { nombre: 'Haemulon album', imagen: './img/img14.png' },
    { nombre: 'Haemulon aurolineatum', imagen: './img/img15.png' },
    { nombre: 'Haemulon atlanticus', imagen: './img/img16.png' },
    { nombre: 'Haemulon bonariense', imagen: './img/img17.png' },
    { nombre: 'Haemulon boschmae', imagen: './img/img18.png' },
    { nombre: 'Haemulon carbonarium', imagen: './img/img19.png' },
    { nombre: 'Haemulon flavolineatum', imagen: './img/img20.png' },
    { nombre: 'Haemulopsis corvinaeformis', imagen: './img/img21.png' },
    { nombre: 'Lutjanus cyanopterus', imagen: './img/img22.png' },
    { nombre: 'Lutjanus jocu', imagen: './img/img23.png' },
    { nombre: 'Rhompoplites aurorubens', imagen: './img/img24.png' },
    { nombre: 'Lutjanus griseus', imagen: './img/img25.png' },
    { nombre: 'Lutjanus apodus', imagen: './img/img26.png' },
    { nombre: 'Lutjanus analis', imagen: './img/img27.png' },
    { nombre: 'Lutjanus buccanella', imagen: './img/img28.png' },
    { nombre: 'Lutjanus purpureus', imagen: './img/img29.png' },
    { nombre: 'Lutjanus synagris', imagen: './img/img30.png' },
    { nombre: 'Eques punctatus', imagen: './img/img31.png' },
    { nombre: 'Eques lanceolatus', imagen: './img/img32.png' },
    { nombre: 'Pareques acuminatus', imagen: './img/img33.png' },
    { nombre: 'Micropogonias furnieri', imagen: './img/img34.png' },
    { nombre: 'Larimus breviceps', imagen: './img/img35.png' },
    { nombre: 'Isopisthus parvipinnis', imagen: './img/img36.png' },
    { nombre: 'Epinephelus itajara', imagen: './img/img37.png' },
    { nombre: 'Epinephelus striatus', imagen: './img/img38.png' },
    { nombre: 'Epinephelus adscensionis', imagen: './img/img39.png' },
    { nombre: 'Cephalopholis cruentata', imagen: './img/img40.png' },
    { nombre: 'Dermatolepis inermis', imagen: './img/img41.png' },
    { nombre: 'Liopropoma mowbrayi', imagen: './img/img42.png' },
    { nombre: 'Abudefduf saxatilis', imagen: './img/img43.png' },
    { nombre: 'Microspathodon chrysurus', imagen: './img/img44.png' },
    { nombre: 'Stegastes adustus', imagen: './img/img45.png' },
    { nombre: 'Stegastes diencaeus', imagen: './img/img46.png' },
    { nombre: 'Stegastes partitus', imagen: './img/img47.png' },
    { nombre: 'Stegastes planifrons', imagen: './img/img48.png' },
    { nombre: 'Neomerinthe beanorum', imagen: './img/img49.png' },
    { nombre: 'Pontinus longispinis', imagen: './img/img50.png' },
    { nombre: 'Scorpaena plumieri', imagen: './img/img51.png' },
    { nombre: 'Scorpaenodes caribbaeus', imagen: './img/img52.png' },
    { nombre: 'Pterois volitans', imagen: './img/img53.png' },
    { nombre: 'Holacanthus ciliaris', imagen: './img/img54.png' },
    { nombre: 'Holacanthus tricolor', imagen: './img/img55.png' },
    { nombre: 'Pomacanthus paru', imagen: './img/img56.png' },
    { nombre: 'Pomacanthus arcuatus', imagen: './img/img57.png' },
    { nombre: 'Centropyge argi', imagen: './img/img58.png' },
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
