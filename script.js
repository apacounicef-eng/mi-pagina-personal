const header = document.querySelector('header');
const contador = document.querySelector('#contador');
let clics = 0;

header.addEventListener('click', function() {
    const colores = ['#4f46e5', '#e53e3e', '#38a169', '#d69e2e', '#3182ce'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    header.style.backgroundColor = colorAleatorio;

    clics = clics + 1;
    contador.textContent = 'Clics: ' + clics;
});

const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', function(evento) {
    evento.stopPropagation();
    clics = 0;
    contador.textContent = 'Clics: 0';
    header.style.backgroundColor = '#4f46e5';
});

const barras = document.querySelectorAll('.progreso');

barras.forEach(function(barra) {
    const nivel = barra.getAttribute('data-nivel');
    setTimeout(function() {
        barra.style.width = nivel + '%';
    }, 300);
});

const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

function validarMensaje(mensaje) {
    return mensaje.length >= 10;
}

function crearRespuesta(nombre, email) {
    return '¡Gracias ' + nombre + '! Te contactaremos a ' + email + ' pronto.';
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;

    if (validarMensaje(mensaje)) {
        respuesta.style.color = '#38a169';
        respuesta.textContent = crearRespuesta(nombre, email);
        formulario.reset();
    } else {
        respuesta.style.color = '#e53e3e';
        respuesta.textContent = '⚠️ El mensaje debe tener al menos 10 caracteres.';
    }
});

function saludar(nombre) {
    return '¡Hola, ' + nombre + '! Bienvenido a mi página.';
}

const mensaje1 = saludar('Betito');
const mensaje2 = saludar('Carlos');

console.log(mensaje1);
console.log(mensaje2);