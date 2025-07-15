const API_URL = "http://localhost:4000/api/mensajes";

// Obtener mensajes (GET)
async function obtenerMensajes() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener mensajes");
  const json = await response.json();
  return json;
}

// Crear mensaje (POST)
async function crearMensaje(datosMensaje) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosMensaje),
  });
  if (!response.ok) throw new Error("Error al crear mensaje");
  return await response.json();
}

// Actualizar mensaje (PUT)
async function actualizarMensaje(id, datosMensaje) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT", // o PATCH
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosMensaje),
  });
  if (!response.ok) throw new Error("Error al actualizar mensaje");
  return await response.json();
}

// Eliminar mensaje (DELETE)
async function eliminarMensaje(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar mensaje");
  return await response.json();
}

// Obtener mensaje por id (GET)
async function obtenerMensajePorId(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener mensaje");
  return await response.json();
}

module.exports = {
  obtenerMensajes,
  crearMensaje,
  actualizarMensaje,
  eliminarMensaje,
  obtenerMensajePorId,
};