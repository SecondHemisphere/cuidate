document.addEventListener('DOMContentLoaded', function() {
    // Obtiene referencias a los elementos del formulario y los contenedores de error.
    const formulario = document.getElementById('formularioDeContacto');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const mensajeInput = document.getElementById('mensaje');
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorTelefono = document.getElementById('errorTelefono');
    const errorMensaje = document.getElementById('errorMensaje');
    const mensajeEnviado = document.getElementById('mensajeEnviado');
    const mensajeError = document.getElementById('mensajeError');

    // Función para validar que el campo Nombre no esté vacío.
    function validarNombre() {
        if (nombreInput.value.trim() === '') {
            errorNombre.textContent = 'Por favor, ingresa tu nombre.';
            return false; // Indica que la validación falló.
        } else {
            errorNombre.textContent = '';
            return true; // Indica que la validación fue exitosa.
        }
    }

    // Función para validar el formato básico del campo Email.
    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errorEmail.textContent = 'Por favor, ingresa un email válido.';
            return false; // Indica que la validación falló.
        } else {
            errorEmail.textContent = '';
            return true; // Indica que la validación fue exitosa.
        }
    }

    // Función para validar el campo Teléfono (actualmente solo resetea el mensaje de error).
    function validarTelefono() {
        errorTelefono.textContent = '';
        return true; // La validación del teléfono siempre se considera exitosa.
    }

    // Función para validar que el campo Mensaje no esté vacío.
    function validarMensaje() {
        if (mensajeInput.value.trim() === '') {
            errorMensaje.textContent = 'Por favor, ingresa tu mensaje.';
            return false; // Indica que la validación falló.
        } else {
            errorMensaje.textContent = '';
            return true; // Indica que la validación fue exitosa.
        }
    }

    // Agrega un listener al evento 'submit' del formulario para realizar la validación final.
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario.
        mensajeEnviado.classList.add('oculto'); // Oculta mensajes de éxito previos.
        mensajeError.classList.add('oculto');   // Oculta mensajes de error previos.

        // Llama a las funciones de validación para cada campo.
        const esNombreValido = validarNombre();
        const esEmailValido = validarEmail();
        const esTelefonoValido = validarTelefono();
        const esMensajeValido = validarMensaje();

        // Si todas las validaciones son exitosas...
        if (esNombreValido && esEmailValido && esTelefonoValido && esMensajeValido) {
            console.log('Formulario enviado:', {
                nombre: nombreInput.value,
                email: emailInput.value,
                telefono: telefonoInput.value,
                mensaje: mensajeInput.value
            });
            formulario.reset(); // Limpia el formulario.
            mensajeEnviado.classList.remove('oculto'); // Muestra el mensaje de éxito.
        } else {
            // Si alguna de las validaciones falla (alguna de las variables 'es...Valido' es 'false'):
            console.log('Formulario con errores.');
            mensajeError.classList.remove('oculto'); // Muestra el mensaje de error general.
            // Los mensajes de error específicos para cada campo ya se están mostrando
            // directamente dentro de sus respectivas funciones de validación
        }
    });

    // Agrega listeners para validar cada campo cuando el usuario sale de él.
    nombreInput.addEventListener('blur', validarNombre);
    emailInput.addEventListener('blur', validarEmail);
    telefonoInput.addEventListener('blur', validarTelefono);
    mensajeInput.addEventListener('blur', validarMensaje);
});