document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioDeContacto");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const mensajeInput = document.getElementById("mensaje");
  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");
  const errorTelefono = document.getElementById("errorTelefono");
  const errorMensaje = document.getElementById("errorMensaje");
  const mensajeEnviado = document.getElementById("mensajeEnviado");
  const mensajeError = document.getElementById("mensajeError");

  function validarNombre() {
    if (nombreInput.value.trim() === "") {
      errorNombre.textContent = "Por favor, ingresa tu nombre.";
      return false;
    } else {
      errorNombre.textContent = "";
      return true;
    }
  }

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

  function validarTelefono() {
    errorTelefono.textContent = "";
    return true;
  }

  function validarMensaje() {
    if (mensajeInput.value.trim() === "") {
      errorMensaje.textContent = "Por favor, ingresa tu mensaje.";
      return false;
    } else {
      errorMensaje.textContent = "";
      return true;
    }
  }

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    mensajeEnviado.classList.add("oculto");
    mensajeError.classList.add("oculto");

    const esNombreValido = validarNombre();
    const esEmailValido = validarEmail();
    const esTelefonoValido = validarTelefono();
    const esMensajeValido = validarMensaje();

    if (
      esNombreValido &&
      esEmailValido &&
      esTelefonoValido &&
      esMensajeValido
    ) {
      // Aquí enviamos los datos a la API con fetch
      fetch("/api/mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombreInput.value,
          email: emailInput.value,
          telefono: telefonoInput.value,
          mensaje: mensajeInput.value,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Error en el envío");
          return response.json();
        })
        .then((data) => {
          formulario.reset();
          mensajeEnviado.classList.remove("oculto");
        })
        .catch((error) => {
          console.error(error);
          mensajeError.classList.remove("oculto");
        });
    } else {
      mensajeError.classList.remove("oculto");
    }
  });

  nombreInput.addEventListener("blur", validarNombre);
  emailInput.addEventListener("blur", validarEmail);
  telefonoInput.addEventListener("blur", validarTelefono);
  mensajeInput.addEventListener("blur", validarMensaje);
});
