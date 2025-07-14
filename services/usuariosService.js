async function obtenerUsuarios() {
  const response = await fetch("http://localhost:4000/api/usuarios");
  if (!response.ok) throw new Error("Error al obtener usuarios");
  const json = await response.json();
  return json.body || [];
}

module.exports = { obtenerUsuarios };
