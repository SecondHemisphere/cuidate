const db = require("../database");

exports.guardarMensaje = async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  try {
    const sql =
      "INSERT INTO mensajes (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)";
    await pool.query(sql, [nombre, email, telefono, mensaje]);

    res.json({ success: true, message: "Mensaje guardado" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al guardar el mensaje" });
  }
};
