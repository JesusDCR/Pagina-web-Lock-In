// Función para desplazar suavemente a un elemento específico en la página
function smoothScrollTo(target, center = false, fixedOffset = 0) {
    const targetElement = document.querySelector(target);
    let offset;

    // Calcula la posición de desplazamiento
    if (center) {
        offset = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetElement.clientHeight / 2);
    } else {
        offset = fixedOffset !== 0 ? window.scrollY + fixedOffset : targetElement.getBoundingClientRect().top + window.scrollY;
    }
    
    // Realiza el desplazamiento
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// Evento de clic en el botón 'scroll-button'
document.getElementById('scroll-button').addEventListener('click', () => {
    smoothScrollTo('#app-section', true);
});

// Añade eventos de clic a los enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const fixedOffsets = { '#features': 1400, '#contact-us': 4825 };

        // Desplaza a la sección correspondiente
        smoothScrollTo(targetId, targetId !== '#features' && targetId !== '#contact-us', fixedOffsets[targetId] || 0);
    });
});

// Evento de clic 'button-secondary'
document.querySelector('.button-secondary').addEventListener('click', () => {
    smoothScrollTo('#features', false);
});

// Verifica la visibilidad de 'first-moment'
document.addEventListener('DOMContentLoaded', () => {
    const firstMomentSection = document.querySelector('.first-moment');

    function checkVisibility() {
        const rect = firstMomentSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            firstMomentSection.classList.add('visible');
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

// Animación de escritura 'name-lock-in'
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.name-lock-in');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index++);
            setTimeout(type, 140);
        }
    }

    type();
});

// Evento de clic en el botón de menú
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');
const firstMomentSection = document.querySelector('.first-moment');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    firstMomentSection.classList.toggle('shift-down');
});