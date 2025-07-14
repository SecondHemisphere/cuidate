const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Ruta para dashboard
router.get("/dashboard", (req, res) => {
  adminController.dashboard(req, res, "dashboard");
});

module.exports = router;
