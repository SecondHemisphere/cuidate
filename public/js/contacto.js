document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioDeContacto");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  const mensajeError = document.getElementById("mensajeError");
  const mensajeEnviado = document.getElementById("mensajeEnviado");

  // Ocultar mensajes cuando el usuario escribe en cualquier campo
  [nombre, email, telefono, mensaje].forEach((input) => {
    input.addEventListener("input", () => {
      mensajeEnviado.classList.add("oculto");
      mensajeError.classList.add("oculto");
      mensajeError.textContent = "";
    });
  });

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar mensajes previos
    mensajeError.textContent = "";
    mensajeError.classList.add("oculto");
    mensajeEnviado.classList.add("oculto");

    let errores = [];

    if (nombre.value.trim() === "") {
      errores.push("Por favor, ingresa tu nombre.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      errores.push("Por favor, ingresa un email válido.");
    }

    // Teléfono opcional, no se valida.

    if (mensaje.value.trim() === "") {
      errores.push("Por favor, ingresa tu mensaje.");
    }

    if (errores.length > 0) {
      mensajeError.innerHTML = errores.join("<br>");
      mensajeError.classList.remove("oculto");
      return;
    }

    fetch("http://localhost:4000/api/mensajes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        nombre: nombre.value.trim(),
        email: email.value.trim(),
        telefono: telefono.value.trim(),
        mensaje: mensaje.value.trim(),
      }),
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Error en el envío");
        return response.json();
      })
      .then(function (data) {
        formulario.reset();
        mensajeEnviado.classList.remove("oculto");
      })
      .catch(function (error) {
        mensajeError.textContent =
          "Ocurrió un error al enviar el mensaje. Intenta nuevamente.";
        mensajeError.classList.remove("oculto");
      });
  });
});
