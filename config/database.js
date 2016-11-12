var Obra = require('../models/obras.js').Obra;
var fs = require('fs');
var Promise = require('promise');
var parse = require('csv-parse');
var path = require('path');

var read_obra_csv = function() {
  return new Promise(function(fufill, reject) {
    var csvData=[];
    fs.createReadStream(path.join(__dirname, '..', 'dados_obras', 'dados.csv'))
    .pipe(parse({delimiter: ','}))
    .on('error', function(error) {
      console.log(error);
    })
    .on('data', function(csvrow) {
      csvData.push(csvrow);
    })
    .on('end',function() {
      fufill(csvData);
    });
  })
}


module.exports = {

  insereListaObras : function(lista_obras) {
    return new Promise(function(fufill,reject) {
      //Insere as obras no banco partindo de um arquivo csv.
      read_obra_csv().then(function(lista_obras){

        console.log(lista_obras.length);
        Obra.destroy({where: {}});

        lista_obras.forEach(function(obra) {
          //Criação do objeto obra a ser salvo no banco...
          var obj_inserir = {
            cidade	               : obra[0] || "",
            status	               : obra[1] || "",
            descricao	             : obra[2] || "",
            endereco	             : obra[3] || "",
            tipo_projeto	         : obra[4] || "",
            empresa_contratada	   : obra[5]|| "",
            valor_licitado	       : obra[6]|| "",
            valor_real	           : obra[7]|| "",
            ultima_atualizacao	   : obra[8]|| "",
            execucao_fisica	       : obra[9]|| "",
            prazo_conclusao	       : obra[10]|| "",
            prazo_vigencia	       : obra[11]|| "",
            latidude	             : obra[12]|| "",
            longitude              : obra[13]|| "",
          }

          try {
            Obra.create(obj_inserir);
          } catch (e) {
            console.log(e);
          } finally {

          }

        })
      })
    });
    fufill(1);
  },
  buscaListaObras : function() {
    return new Promise(function(fufill,reject) {
      //Busca as obras do banco

      console.log("Obras buscadas..");
      fufill(1);

    });
  }

}
