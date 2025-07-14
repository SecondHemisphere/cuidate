const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.post("/mensajes", apiController.guardarMensaje);

module.exports = router;
