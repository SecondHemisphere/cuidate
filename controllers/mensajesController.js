const {
  obtenerMensajes,
  crearMensaje,
  actualizarMensaje,
  eliminarMensaje,
  obtenerMensajePorId,
} = require("../services/mensajesService");

// 1. Listar todos los mensajes
exports.index = async (req, res) => {
  try {
    const mensajes = await obtenerMensajes();
    res.render("admin/mensajes/index", {
      title: "Listado de Mensajes",
      layout: "layouts/admin",
      mensajes: mensajes.body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener mensajes");
  }
};

// 2. Mostrar formulario para crear mensaje
exports.create = (req, res) => {
  res.render("admin/mensajes/create", {
    title: "Crear Mensaje",
    layout: "layouts/admin",
    formAction: "/admin/mensajes",
    formMethod: "POST",
    mensaje: null,
  });
};

// 3. Guardar mensaje nuevo (POST)
exports.store = async (req, res) => {
  try {
    const datosMensaje = req.body;
    await crearMensaje(datosMensaje);
    res.redirect("/admin/mensajes/index");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear mensajes");
  }
};

// 4. Mostrar un mensaje específico
exports.show = async (req, res) => {
  try {
    const id = req.params.id;
    const mensaje = await obtenerMensajePorId(id);
    if (!mensaje) return res.status(404).send("Mensaje no encontrado");
    res.render("admin/mensajes/show", {
      title: "Detalle Mensaje",
      layout: "layouts/admin",
      mensaje: mensaje.body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener mensaje");
  }
};

// 5. Mostrar formulario para editar mensaje
exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const mensaje = await obtenerMensajePorId(id);
    if (!mensaje) return res.status(404).send("Mensaje no encontrado");
    res.render("admin/mensajes/edit", {
      title: "Editar Mensaje",
      layout: "layouts/admin",
      formAction: `/mensajes/${id}?_method=PUT`,
      formMethod: "POST",
      mensaje: mensaje.body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener mensaje");
  }
};

// 6. Actualizar mensaje (PUT)
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const datosMensaje = req.body;
    await actualizarMensaje(id, datosMensaje);
    res.redirect("/mensajes");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar mensaje");
  }
};

// 7. Eliminar mensaje (DELETE)
exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;
    await eliminarMensaje(id);
    res.redirect("/mensajes");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar mensaje");
  }
};
