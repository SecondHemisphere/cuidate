// ==============================================
//  Importaciones
// ==============================================
const fs = require('fs');
const path = require('path');

// ==============================================
//  Ruta al archivo JSON de mensajes
// ==============================================
const rutaMensajes = path.join(__dirname, '..', 'data', 'mensajes.json');

// ==============================================
//  Funciones auxiliares para lectura y escritura
// ==============================================

// Leer mensajes del archivo JSON (sincrónico)
function leerMensajes () {
  try {
    const datos = fs.readFileSync(rutaMensajes, 'utf8');
    return JSON.parse(datos);
  } catch (error) {
    console.error('Error leyendo mensajes.json:', error);
    return [];
  }
}

// Guardar mensajes en archivo JSON (asíncrono)
function guardarMensajes (mensajes) {
  return new Promise((resolve, reject) => {
    fs.writeFile(rutaMensajes, JSON.stringify(mensajes, null, 2), (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

// ==============================================
//  Controladores para rutas de mensajes
// ==============================================

// Obtener mensajes con al menos tres filtros entre nombre, edad, email, telefono y mensaje
exports.obtenerMensajes = (req, res) => {
  const mensajes = leerMensajes();
  const { nombre, edad, email, telefono, mensaje } = req.query;
  const filtros = { nombre, edad, email, telefono, mensaje };

  // Contar cuántos filtros están activos (no undefined ni vacíos)
  const filtrosActivos = Object.values(filtros).filter(
    (valor) => valor !== undefined && valor !== ''
  );

  // Si hay parámetros, exigir al menos 3 filtros activos
  if (filtrosActivos.length > 0 && filtrosActivos.length < 3) {
    return res.status(400).json({
      mensaje: 'Se requieren al menos tres parámetros para realizar la búsqueda.'
    });
  }

  // Si no hay filtros, devolver todos los mensajes
  let resultados = mensajes;

  // Aplicar filtros si existen
  if (nombre) {
    resultados = resultados.filter((m) =>
      m.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  if (edad) {
    const edadNumero = parseInt(edad, 10);
    if (!isNaN(edadNumero)) {
      resultados = resultados.filter((m) => m.edad === edadNumero);
    }
  }

  if (email) {
    resultados = resultados.filter((m) =>
      m.email.toLowerCase().includes(email.toLowerCase())
    );
  }

  if (telefono) {
    resultados = resultados.filter((m) =>
      m.telefono.toLowerCase().includes(telefono.toLowerCase())
    );
  }

  if (mensaje) {
    resultados = resultados.filter((m) =>
      m.mensaje.toLowerCase().includes(mensaje.toLowerCase())
    );
  }

  // Si no hay resultados, responder con error 404
  if (resultados.length === 0) {
    return res.status(404).json({
      mensaje: 'No se encontraron mensajes con esos filtros.'
    });
  }

  res.json(resultados);
};

// Crear un nuevo mensaje y guardarlo en el archivo JSON
exports.crearMensaje = async (req, res) => {
  const nuevoMensaje = req.body;

  // Validar campos obligatorios
  if (
    !nuevoMensaje.nombre ||
    !nuevoMensaje.edad ||
    !nuevoMensaje.email ||
    !nuevoMensaje.mensaje
  ) {
    return res.status(400).json({
      mensaje: 'Faltan campos obligatorios: nombre, edad, email, mensaje.'
    });
  }

  try {
    const mensajes = leerMensajes();

    // Generar nuevo ID incremental
    const nuevoId =
      mensajes.length > 0 ? Math.max(...mensajes.map((m) => m.id)) + 1 : 1;
    nuevoMensaje.id = nuevoId;

    mensajes.push(nuevoMensaje);

    await guardarMensajes(mensajes);

    res.status(201).json({
      mensaje: 'Mensaje recibido y agregado exitosamente',
      datos: nuevoMensaje
    });
  } catch (error) {
    console.error('Error guardando mensaje:', error);
    res.status(500).json({ mensaje: 'Error interno al guardar mensaje.' });
  }
};
