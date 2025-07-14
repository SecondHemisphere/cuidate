async function obtenerMensajes() {
  const response = await fetch("http://localhost:4000/api/mensajes");
  if (!response.ok) throw new Error("Error al obtener mensajes");
  const json = await response.json();
  return json;
}

module.exports = { obtenerMensajes };
