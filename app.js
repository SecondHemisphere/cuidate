// ==============================================
//  Importaciones
// ==============================================
const express = require('express');
const path = require('path');
const mensajesRoutes = require('./routes/mensajes');

// ==============================================
//  Configuración de la aplicación
// ==============================================
const app = express();
const PORT = process.env.PORT || 3000;

// ==============================================
//  Middlewares
// ==============================================

// Middleware para parsear cuerpos JSON en las peticiones
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// ==============================================
//  Rutas
// ==============================================

// Ruta raíz que sirve el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas de la API para mensajes
app.use('/mensajes', mensajesRoutes);

// ==============================================
//  Inicio del servidor
// ==============================================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
