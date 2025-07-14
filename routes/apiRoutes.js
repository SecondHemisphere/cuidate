const express = require("express");
const router = express.Router();

router.post("/mensajes", (req, res) => {
  console.log("BODY:", req.body); // <-- Agrega este log para depurar
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  // Aquí guardas en DB o haces la lógica
  res.json({ mensaje: "Mensaje recibido con éxito." });
});

module.exports = router;
