var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://fiscalize_admin:1234@localhost:5432/fiscalize');


module.exports = {

  Obra : sequelize.define ("dados_obras_governo",{

    cidade	: {

      type : Sequelize.STRING,
      field : "cidade"

    },
    status	: {

      type : Sequelize.STRING,
      field : "status"

    },
    descricao	: {

      type : Sequelize.STRING,
      field : "descricao"

    },
    endereco	: {

      type : Sequelize.STRING,
      field : "endereco"

    },
    tipo_projeto	: {

      type : Sequelize.STRING,
      field : "tipo_projeto"

    },
    empresa_contratada	: {

      type : Sequelize.STRING,
      field : "empresa_contratada"

    },
    valor_licitado	: {

      type : Sequelize.STRING,
      field : "valor_licitado"

    },
    valor_real	: {

      type : Sequelize.STRING,
      field : "valor_real"

    },
    ultima_atualizacao	: {

      type : Sequelize.STRING,
      field : "ultima_atualizacao"

    },
    execucao_fisica	: {

      type : Sequelize.STRING,
      field : "execucao_fisica"

    },
    prazo_conclusao	: {

      type : Sequelize.STRING,
      field : "prazo_conclusao"

    },
    prazo_vigencia	: {

      type : Sequelize.STRING,
      field : "prazo_vigencia"

    },
    latidude	: {

      type : Sequelize.STRING,
      field : "latidude"

    },
    longitude: {

      type : Sequelize.STRING,
      field : "longitude"

    },
  })

}

sequelize.sync({force:false});
