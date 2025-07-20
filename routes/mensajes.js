// ==============================================
//  Importaciones
// ==============================================
const express = require('express');
const router = express.Router();
const mensajesController = require('../controllers/mensajesController');

// ==============================================
//  Rutas para mensajes
// ==============================================

// GET /mensajes con filtros
router.get('/', mensajesController.obtenerMensajes);

// POST /mensajes para crear nuevo mensaje
router.post('/', mensajesController.crearMensaje);

// ==============================================
//  Exportación del router
// ==============================================
module.exports = router;
