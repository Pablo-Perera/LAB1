var express = require('express');
var router = express.Router();

/* GET servicios page */
router.get('/', function(req, res, next) {
  res.render('servicios', { 
    title: 'Nuestros Servicios',
    description: 'Soluciones diseñadas para impulsar tu negocio con tecnología moderna.',
    services: [
      {
        nombre: 'Desarrollo de Software',
        detalle: 'Creamos aplicaciones a medida usando las últimas tecnologías.'
      },
      {
        nombre: 'Consultoría Tecnológica',
        detalle: 'Te ayudamos a tomar decisiones técnicas estratégicas.'
      },
      {
        nombre: 'Transformación Digital',
        detalle: 'Digitalizamos tus procesos para hacerlos más eficientes.'
      },
      {
        nombre: 'Ciberseguridad',
        detalle: 'Protegemos tus sistemas y datos con prácticas modernas.'
      }
    ]
  });
});

module.exports = router;
