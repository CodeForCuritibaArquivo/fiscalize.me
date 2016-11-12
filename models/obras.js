var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://fiscalize_admin:1234@localhost:5432/fiscalize', {logging: false});


module.exports = {

  Obra : sequelize.define ("dados_obras_governo",{

    municipio : {

      type : Sequelize.STRING,
      field : "municipio",

    },
    empreend : {

      type : Sequelize.STRING,
      field : "empreend",

    },
    tipo_atualiz	 : {

      type : Sequelize.STRING,
      field : "atualiz",

    },
    exec	 : {

      type : Sequelize.STRING,
      field : "exec",

    },
    proj	 : {

      type : Sequelize.STRING,
      field : "proj",

    },
    lote	 : {

      type : Sequelize.STRING,
      field : "lote",

    },
    status_lote	 : {

      type : Sequelize.STRING,
      field : "status_lote",

    },
    acao	 : {

      type : Sequelize.STRING,
      field : "acao",

    },
    realiz	 : {

      type : Sequelize.STRING,
      field : "realiz",

    },
    inic_empreend  : {

      type : Sequelize.STRING,
      field : "inic_empreend",

    },
    fim_empreend	 : {

      type : Sequelize.STRING,
      field : "fim_empreend",

    },
    data_projeto	 : {

      type : Sequelize.STRING,
      field : "data_projeto",

    },
    data_medicao	 : {

      type : Sequelize.STRING,
      field : "data_medicao",

    },
    porcento_exec	 : {

      type : Sequelize.STRING,
      field : "porcento_exec",

    },
    sit_empreend	 : {

      type : Sequelize.STRING,
      field : "sit_empreend",

    },
    valor_empreend	 : {

      type : Sequelize.STRING,
      field : "valor_empreend",

    },
    valor_tesouro	 : {

      type : Sequelize.STRING,
      field : "valor_tesouro",

    },
    valor_contrap	 : {

      type : Sequelize.STRING,
      field : "valor_contrap",

    },
    empreendimento	 : {

      type : Sequelize.STRING,
      field : "empreendimento",

    },
    progr	 : {

      type : Sequelize.STRING,
      field : "progr",

    },
    programa	 : {

      type : Sequelize.STRING,
      field : "programa",

    },
    cod_componente	 : {

      type : Sequelize.STRING,
      field : "cod_componente",

    },
    componente	 : {

      type : Sequelize.STRING,
      field : "componente",

    },
    cod_bem	 : {

      type : Sequelize.STRING,
      field : "cod_bem",

    },
    remessa	 : {

      type : Sequelize.STRING,
      field : "remessa",

    },
    ind_aceita	 : {

      type : Sequelize.STRING,
      field : "ind_aceita",

    },
    cod_escr_reg	 : {

      type : Sequelize.STRING,
      field : "cod_escr_reg",

    },
    executor	 : {

      type : Sequelize.STRING,
      field : "executor",

    },
    escritorio_regional	 : {

      type : Sequelize.STRING,
      field : "escritorio_regional",

    },
    cod_assoc	 : {

      type : Sequelize.STRING,
      field : "cod_assoc",

    },
    n_convenio	 : {

      type : Sequelize.STRING,
      field : "n_convenio",

    },
    associacao : {

      type : Sequelize.STRING,
      field : "associacao",

    },

  })

}

sequelize.sync({force:false});
