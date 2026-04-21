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