document.addEventListener("DOMContentLoaded", function () {
  // Obtiene referencias a los elementos del formulario y los contenedores de error.
  const formulario = document.getElementById("formularioDeContacto");
  const nombreInput = document.getElementById("nombre");
  const edadInput = document.getElementById("edad");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const mensajeInput = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorEdad = document.getElementById("errorEdad");
  const errorEmail = document.getElementById("errorEmail");
  const errorTelefono = document.getElementById("errorTelefono");
  const errorMensaje = document.getElementById("errorMensaje");

  const mensajeEnviado = document.getElementById("mensajeEnviado");
  const mensajeError = document.getElementById("mensajeError");

  // Función para validar que el campo Nombre no esté vacío.
  function validarNombre() {
    if (nombreInput.value.trim() === "") {
      errorNombre.textContent = "Por favor, ingresa tu nombre.";
      return false;
    } else {
      errorNombre.textContent = "";
      return true;
    }
  }

  // Función para validar que la Edad sea un número mayor a 0.
  function validarEdad() {
    const edad = parseInt(edadInput.value.trim());
    if (isNaN(edad) || edad <= 0) {
      errorEdad.textContent = "Por favor, ingresa una edad válida (>0).";
      return false;
    } else {
      errorEdad.textContent = "";
      return true;
    }
  }

  // Función para validar el formato básico del campo Email.
  function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorEmail.textContent = "Por favor, ingresa un email válido.";
      return false;
    } else {
      errorEmail.textContent = "";
      return true;
    }
  }

  // Función para validar el campo Teléfono (actualmente solo resetea el mensaje de error).
  function validarTelefono() {
    errorTelefono.textContent = "";
    return true;
  }

  // Función para validar que el campo Mensaje no esté vacío.
  function validarMensaje() {
    if (mensajeInput.value.trim() === "") {
      errorMensaje.textContent = "Por favor, ingresa tu mensaje.";
      return false;
    } else {
      errorMensaje.textContent = "";
      return true;
    }
  }

  // Agrega un listener al evento 'submit' del formulario para realizar la validación final.
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario.
    mensajeEnviado.classList.add("oculto"); // Oculta mensajes de éxito previos.
    mensajeError.classList.add("oculto"); // Oculta mensajes de error previos.

    // Llama a las funciones de validación para cada campo.
    const esNombreValido = validarNombre();
    const esEdadValido = validarEdad();
    const esEmailValido = validarEmail();
    const esTelefonoValido = validarTelefono();
    const esMensajeValido = validarMensaje();

    // Si todas las validaciones son exitosas.
    if (
      esNombreValido &&
      esEdadValido &&
      esEmailValido &&
      esTelefonoValido &&
      esMensajeValido
    ) {
      // Prepara el objeto con los datos para enviar al backend
      const data = {
        nombre: nombreInput.value.trim(),
        edad: parseInt(edadInput.value.trim(), 10),
        email: emailInput.value.trim(),
        telefono: telefonoInput.value.trim(),
        mensaje: mensajeInput.value.trim(),
      };

      // Envia los datos al backend para guardar en el JSON
      fetch("/mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al enviar el mensaje");
          }
          return response.json();
        })
        .then((result) => {
          formulario.reset(); // Limpia el formulario.
          mensajeEnviado.classList.remove("oculto"); // Muestra mensaje de éxito.
        })
        .catch((error) => {
          console.error("Error:", error);
          mensajeError.classList.remove("oculto"); // Muestra mensaje de error.
        });
    } else {
      // Si alguna validación falla:
      console.log("Formulario con errores.");
      mensajeError.classList.remove("oculto"); // Muestra el mensaje de error general.
    }
  });

  // Agrega listeners para validar cada campo cuando el usuario sale de él.
  nombreInput.addEventListener("blur", validarNombre);
  edadInput.addEventListener("blur", validarEdad);
  emailInput.addEventListener("blur", validarEmail);
  telefonoInput.addEventListener("blur", validarTelefono);
  mensajeInput.addEventListener("blur", validarMensaje);
});
