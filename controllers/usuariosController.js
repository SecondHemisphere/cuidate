const {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../services/usuariosService");

// Obtener todos los usuarios
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Crear un nuevo usuario
exports.guardarUsuario = async (req, res) => {
  try {
    const datosUsuario = req.body;
    const usuarioCreado = await crearUsuario(datosUsuario);
    res.status(201).json(usuarioCreado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

// Actualizar usuario por ID
exports.modificarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const datosUsuario = req.body;
    const usuarioActualizado = await actualizarUsuario(id, datosUsuario);
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

// Eliminar usuario por ID
exports.borrarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    await eliminarUsuario(id);
    res.status(204).send(); // Sin contenido
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
