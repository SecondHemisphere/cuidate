const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mainRoutes = require("./routes/mainRoutes");
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);
app.set("layout", "layout");

// Middleware para parsear JSON
app.use(express.json());

// Middleware para parsear formularios urlencoded (si usas formularios HTML)
app.use(express.urlencoded({ extended: true }));

// Middleware para archivos estáticos (CSS, JS, imágenes)
app.use(express.static(__dirname + "/public"));

// ✅ Middleware global para que `activo` siempre exista y no dé error
app.use((req, res, next) => {
  res.locals.activo = ""; // valor por defecto
  next();
});

// Rutas
app.use("/", mainRoutes);

// Inicio del servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
