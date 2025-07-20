document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los elementos con la clase "acordeon"
  const acordeones = document.getElementsByClassName("acordeon");

  // Itera sobre cada elemento de acordeón
  for (let i = 0; i < acordeones.length; i++) {
    // Agrega un listener de evento de clic a cada acordeón
    acordeones[i].addEventListener("click", function () {
      // Cuando se hace clic, cambia la clase "activo" del acordeón
      this.classList.toggle("activo");

      // Selecciona el elemento panel que sigue al acordeón
      const panel = this.nextElementSibling;

      // Si el panel tiene una altura máxima definida, la elimina (cierra el panel)
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        // Si no tiene altura máxima, la establece a la altura total del contenido del panel (abre el panel)
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Maneja los enlaces rápidos con animación suave
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    // Agrega un listener de evento de clic a cada enlace que comience con "#"
    enlace.addEventListener("click", function (evento) {
      // Previene el comportamiento de navegación predeterminado del enlace
      evento.preventDefault();

      // Obtiene el valor del atributo "href" del enlace (el selector del objetivo)
      const idObjetivo = this.getAttribute("href");
      // Selecciona el elemento HTML objetivo usando el selector obtenido
      const elementoObjetivo = document.querySelector(idObjetivo);

      // Si se encuentra el elemento objetivo
      if (elementoObjetivo) {
        // Cierra todos los acordeones antes de abrir el objetivo
        for (let i = 0; i < acordeones.length; i++) {
          acordeones[i].classList.remove("activo"); // Remueve la clase "activo"
          acordeones[i].nextElementSibling.style.maxHeight = null; // Restablece la altura máxima del panel
        }

        // Intenta encontrar un elemento con la clase "acordeon" dentro del elemento objetivo
        const acordeonObjetivo = elementoObjetivo.querySelector(".acordeon");
        // Si se encuentra un acordeón dentro del objetivo
        if (acordeonObjetivo) {
          acordeonObjetivo.classList.add("activo"); // Agrega la clase "activo" al acordeón objetivo
          const panel = acordeonObjetivo.nextElementSibling; // Selecciona el panel del acordeón objetivo
          panel.style.maxHeight = panel.scrollHeight + "px"; // Establece la altura máxima para mostrar el panel

          // Realiza un desplazamiento suave a la ubicación del elemento objetivo
          window.scrollTo({
            top: elementoObjetivo.offsetTop - 20, // Calcula la posición superior con un pequeño desplazamiento
            behavior: "smooth", // Activa el desplazamiento suave
          });
        } else {
          // Si el objetivo no es un acordeón, simplemente desplázate a él
          window.scrollTo({
            top: elementoObjetivo.offsetTop - 20,
            behavior: "smooth",
          });
        }
      }
    });
  });
});