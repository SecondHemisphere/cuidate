document.addEventListener('DOMContentLoaded', function() {
    // Busca el botón del menú
    const botonMenu = document.querySelector('.boton-menu');
    // Busca el contenedor del menú dentro de la navegación
    const menu = document.querySelector('.navegacion .menu');
    // Verifica que ambos elementos existen en la página antes de continuar
    if (botonMenu && menu) {
        // Agrega un evento para cuando se haga clic en el botón del menú
        botonMenu.addEventListener('click', function() {
            // Alterna la clase 'active' en el menú (la agrega si no está, o la quita si ya está)
            // Esto permite mostrar u ocultar el menú al hacer clic
            menu.classList.toggle('active');
        });
    }
});
