// main.js

// Lógica existente para el menú móvil (si la tienes en un script separado)
// Si la tienes dentro de <script> en index.html, puedes dejarla allí o moverla aquí.
// Si la mueves aquí, asegúrate de eliminarla de index.html
/*
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
*/

// --- Lógica para el Modo Oscuro / Modo Claro ---

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Función para aplicar o quitar el tema oscuro
function toggleDarkMode() {
    body.classList.toggle('dark-theme');

    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Verificar la preferencia del usuario al cargar la página
// Esto asegura que el modo seleccionado se mantenga al recargar
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
} else {
    // Si no hay nada guardado o es 'light', aseguramos el modo claro
    body.classList.remove('dark-theme');
}

// Añadir el event listener al botón
themeToggle.addEventListener('click', toggleDarkMode);