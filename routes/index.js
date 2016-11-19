var express = require('express');
var router = express.Router();
var db = require('../config/database.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mapa', function(req, res, next) {
  res.render('mapa');
});

router.get('/mapa/:cidade' , function(req, res, next) {
  //Chamado ajax aos pontos
  console.log(req.param['cidade']);
});




// Rota temporária (atualiza no banco)
router.get('/atualiza_lista_obras', function(req, res, next) {

  db.insereListaObras().then(function(dados){
    console.log(dados);
  })

  // res.redirect('/');
});


module.exports = router;
