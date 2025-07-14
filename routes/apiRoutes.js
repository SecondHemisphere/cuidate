const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Endpoint POST /api/mensajes
router.post("/mensajes", apiController.recibirMensaje);

module.exports = router;
