var express = require('express');
var router = express.Router();

// GET: Mostrar el formulario
router.get('/', function(req, res) {
  res.render('mejoras', { 
    title: 'Solicitud de Servicios',
    description: 'Rellena el siguiente formulario para solicitar nuestros servicios.'
  });
});

// POST: Procesar formulario
router.post('/', function(req, res) {
  const { nombre, email, servicio } = req.body;

  // Aquí puedes guardar en BD, enviar correo, etc.

  res.render('mejoras-enviado', { 
    title: 'Solicitud enviada',
    nombre,
    email,
    servicio
  });
});

module.exports = router;
