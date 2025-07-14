exports.recibirMensaje = (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  console.log("Mensaje recibido:", req.body);

  // Aquí guardarías en DB o enviarías correo

  res.json({ mensaje: "Mensaje recibido con éxito." });
};
