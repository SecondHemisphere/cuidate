const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const mensajesController = require("../controllers/mensajesController");

// Ruta para dashboard
router.get("/dashboard", (req, res) => {
  adminController.dashboard(req, res, "dashboard");
});

router.get("/mensajes", mensajesController.index);

router.get("/mensajes/create", mensajesController.create);
router.post("/mensajes", mensajesController.store);
router.get("/mensajes/:id", mensajesController.show);
router.get("/mensajes/:id/edit", mensajesController.edit);
router.put("/mensajes/:id", mensajesController.update);
router.delete("/mensajes/:id", mensajesController.destroy);

module.exports = router;
