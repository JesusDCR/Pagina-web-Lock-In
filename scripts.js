function smoothScrollTo(target, center = false, fixedOffset = 0) {
    const targetElement = document.querySelector(target);
    let offset;

    if (center) {
        offset = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetElement.clientHeight / 2);
    } else if (fixedOffset !== 0) {
        offset = window.scrollY + fixedOffset;
    } else {
        offset = targetElement.getBoundingClientRect().top + window.scrollY;
    }
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

document.getElementById('scroll-button').addEventListener('click', function() {
    smoothScrollTo('#app-section', true);
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#features') {
            smoothScrollTo(targetId, false, 1400);
        } else if (targetId === '#contact-us') {
            smoothScrollTo(targetId, false, 4825);
        } else {
            smoothScrollTo(targetId, true);
        }
    });
});

document.querySelector('.button-secondary').addEventListener('click', function() {
    smoothScrollTo('#features', false);
});

document.addEventListener('DOMContentLoaded', function() {
const firstMomentSection = document.querySelector('.first-moment');

function checkVisibility() {
    const rect = firstMomentSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        firstMomentSection.classList.add('visible');
        window.removeEventListener('scroll', checkVisibility);
    }
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.name-lock-in');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 140);
        }
    }

    type();
});