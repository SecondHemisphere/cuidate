/* document.addEventListener("DOMContentLoaded", function () {
  const formularioTest = document.getElementById("testPrimerosAuxilios");
  const resultadoDiv = document.getElementById("resultadoTest");

  if (!formularioTest || !resultadoDiv) {
    console.warn(
      "Formulario o div de resultado no encontrados en esta página."
    );
    return;
  }

  formularioTest.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const respuesta1 = formularioTest.pregunta1.value;
    const respuesta2 = formularioTest.pregunta2.value;
    const respuesta3 = formularioTest.pregunta3.value;
    const respuesta4 = formularioTest.pregunta4.value;
    const respuesta5 = formularioTest.pregunta5.value;

    const respuestaCorrecta1 = "revisar";
    const respuestaCorrecta2 = "presion";
    const respuestaCorrecta3 = "20";
    const respuestaCorrecta4 = "manuellcuello";
    const respuestaCorrecta5 = "aguayjabon";

    let correctas = 0;

    if (respuesta1 === respuestaCorrecta1) correctas++;
    if (respuesta2 === respuestaCorrecta2) correctas++;
    if (respuesta3 === respuestaCorrecta3) correctas++;
    if (respuesta4 === respuestaCorrecta4) correctas++;
    if (respuesta5 === respuestaCorrecta5) correctas++;

    resultadoDiv.textContent =
      "Obtuviste " + correctas + " respuesta(s) correcta(s) de 5.";
    resultadoDiv.classList.remove("oculto");
  });
});
 */