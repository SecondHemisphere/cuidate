require("dotenv").config();

const express = require("express");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

const app = express();

// Permitir CORS para todas las peticiones (importante que esté primero)
app.use(cors());

// Parsear JSON en el body
app.use(express.json());

// Parsear datos urlencoded (formularios)
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// Middleware para evitar error 'activo' undefined en vistas
app.use((req, res, next) => {
  res.locals.activo = "";
  next();
});

// Configuración de motor de vistas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);
app.set("layout", "layouts/public");

// Archivos estáticos
app.use(express.static(__dirname + "/public"));

// Rutas web principales
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Rutas API
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

// Rutas para admin
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
