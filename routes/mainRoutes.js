const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rutas principales
router.get("/", (req, res) => {
  mainController.index(req, res, "inicio");
});

router.get("/guia", (req, res) => {
  mainController.guia(req, res, "guia");
});

router.get("/contacto", (req, res) => {
  mainController.contacto(req, res, "contacto");
});

router.get("/acerca", (req, res) => {
  mainController.acerca(req, res, "acerca");
});

router.get("/login", (req, res) => {
  mainController.login(req, res, "auth/login");
});

router.get("/logout", mainController.logout);

module.exports = router;
