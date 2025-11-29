var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Empresa XYZ - Innovación y Tecnología',
    tagline: 'Soluciones digitales para tu negocio',
    services: [
      'Desarrollo de Software',
      'Consultoría Tecnológica',
      'Transformación Digital',
      'Ciberseguridad'
    ],
    imagePath: '/images/empresa.png' // ruta de la imagen
  });
});

module.exports = router;
