document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Evento para abrir/cerrar el menú
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Evento para cerrar el menú al hacer clic en un enlace (en celulares)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});
