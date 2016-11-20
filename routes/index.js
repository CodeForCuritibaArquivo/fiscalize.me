var express = require('express');
var router = express.Router();
var db = require('../config/database.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/search/autocomplete", function(req,res,next) {
  db.buscaAutocomplete(req.body.busca).then(function(resultado_busca) {
    res.send(resultado_busca);
  })
})


// Mapa

router.get('/mapa', function(req, res, next) {
  res.render('mapa');
});

// Busca dados da cidade escolhida

router.post('/mapa' , function(req, res, next) {
  db.buscaListaObras(req.body.cidade).then(function(lista_cidades) {
    if(lista_cidades.length > 0) {
      res.send(lista_cidades);
    } else {
      res.sendStatus(404);
    }
  });
});

// Rota temporária (atualiza no banco)
router.get('/atualiza_lista_obras', function(req, res, next) {
  db.insereListaObras().then(function(dados){
    console.log(dados);
  })
});


module.exports = router;
