const { obtenerUsuarios } = require("../services/usuariosService");
const { obtenerMensajes } = require("../services/mensajesService");

exports.dashboard = async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    const mensajes = await obtenerMensajes();

    const pendientes = mensajes.body.filter((m) => m.estado === "NUEVO");

    res.render("admin/dashboard", {
      title: "Dashboard Admin",
      layout: "layouts/admin",
      usuarios: Array.isArray(usuarios) ? usuarios : [],
      mensajes: mensajes.body,
      pendientes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar dashboard");
  }
};
