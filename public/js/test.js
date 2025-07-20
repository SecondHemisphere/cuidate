document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el formulario de prueba y el div de resultados.
  const formularioTest = document.getElementById('testPrimerosAuxilios');
  const resultadoDiv = document.getElementById('resultadoTest');

  // Escucha el evento de envío del formulario.
  formularioTest.addEventListener('submit', function(evento) {
    // Evita la recarga de la página.
    evento.preventDefault();

    // Obtiene las respuestas del usuario.
    const respuesta1 = formularioTest.pregunta1.value;
    const respuesta2 = formularioTest.pregunta2.value;
    const respuesta3 = formularioTest.pregunta3.value;
    const respuesta4 = formularioTest.pregunta4.value;
    const respuesta5 = formularioTest.pregunta5.value;

    // Define las respuestas correctas.
    const respuestaCorrecta1 = 'revisar';
    const respuestaCorrecta2 = 'presion';
    const respuestaCorrecta3 = '20';
    const respuestaCorrecta4 = 'manuellcuello';
    const respuestaCorrecta5 = 'aguayjabon';

    // Inicializa el contador de respuestas correctas.
    let correctas = 0;

    // Comprueba la respuesta 1.
    if (respuesta1 === respuestaCorrecta1) {
      correctas = correctas + 1;
    }

    // Comprueba la respuesta 2.
    if (respuesta2 === respuestaCorrecta2) {
      correctas = correctas + 1;
    }

    // Comprueba la respuesta 3.
    if (respuesta3 === respuestaCorrecta3) {
      correctas = correctas + 1;
    }

    // Comprueba la respuesta 4.
    if (respuesta4 === respuestaCorrecta4) {
      correctas = correctas + 1;
    }

    // Comprueba la respuesta 5.
    if (respuesta5 === respuestaCorrecta5) {
      correctas = correctas + 1;
    }

    // Muestra los resultados.
    resultadoDiv.textContent = 'Obtuviste ' + correctas + ' respuesta(s) correcta(s) de 5.';
    resultadoDiv.classList.remove('oculto');
  });
});