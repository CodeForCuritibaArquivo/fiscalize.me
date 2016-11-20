var Obra = require('../models/obras.js').Obra;
var fs = require('fs');
var Promise = require('promise');
var parse = require('csv-parse');
var path = require('path');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://fiscalize_admin:1234@localhost:5432/fiscalize', {logging: false});



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

            municipio               : obra[0]  || "",
            empreend                : obra[1]  || "",
            tipo_atualiz	          : obra[2]  || "",
            exec	                  : obra[3]  || "",
            proj	                  : obra[4]  || "",
            lote	                  : obra[5]  || "",
            status_lote	            : obra[6]  || "",
            acao	                  : obra[7]  || "",
            realiz	                : obra[8]  || "",
            inic_empreend           : obra[9]  || "",
            fim_empreend	          : obra[10] || "",
            data_projeto	          : obra[11] || "",
            data_medicao	          : obra[12] || "",
            porcento_exec	          : obra[13] || "",
            sit_empreend	          : obra[14] || "",
            valor_empreend	        : obra[15] || "",
            valor_tesouro	          : obra[16] || "",
            valor_contrap	          : obra[17] || "",
            empreendimento	        : obra[18] || "",
            progr	                  : obra[19] || "",
            programa	              : obra[20] || "",
            cod_componente	        : obra[21] || "",
            componente	            : obra[22] || "",
            cod_bem	                : obra[23] || "",
            remessa	                : obra[24] || "",
            ind_aceita	            : obra[25] || "",
            cod_escr_reg	          : obra[26] || "",
            executor	              : obra[27] || "",
            escritorio_regional	    : obra[28] || "",
            cod_assoc	              : obra[29] || "",
            n_convenio	            : obra[30] || "",
            associacao              : obra[31] || "",

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

  buscaListaObras : function(cidade) {
    return new Promise(function(fufill,reject) {
      //Busca as obras do banco
      Obra.findAll({
        where: {
          municipio : cidade
        },
        attributes: ["municipio", "status_lote", "inic_empreend",
          "fim_empreend", "valor_empreend", "empreendimento", "programa", "componente"]
    }).then(function(lista_obras_cidades) {

        var lista_enviar = [];

        for (var i = 0; i < lista_obras_cidades.length; i++) {
          lista_enviar.push(lista_obras_cidades[i].dataValues);
        }
        fufill(lista_enviar);
      })
    });
  },

  buscaAutocomplete : function(query) {
    return new Promise(function(fufill, reject) {
      Obra.findAll({
        where: {
          municipio : {
            $like: "%" + query + "%"
          }
        }, attributes: ["municipio"],
        limit: 5,
      }).then(function(lista_municipios) {
          var arr_enviar = []
          for (var i = 0; i < lista_municipios.length; i++) {
            if((arr_enviar.indexOf(lista_municipios[i].dataValues.municipio)) === -1) {
              arr_enviar.push(lista_municipios[i].dataValues.municipio);
            }
          }
          fufill(arr_enviar);
        })
      })
  }



}
