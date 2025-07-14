const axios = require("axios");
const { apiUrl } = require("../config/api");

// Obtener todos los mensajes y renderizar la vista
exports.getAll = async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/mensajes`);
    const mensajes = response.data;
    res.render("mensajes", { mensajes });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener mensajes");
  }
};
