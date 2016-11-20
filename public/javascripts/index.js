
$(document).ready(function(){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  $( "#busca" ).autocomplete({
    source: function(req, res) {
      $.ajax({
        url : "/search/autocomplete" ,
        method : "POST",
        data: {"busca" : capitalizeFirstLetter(req.term)},
        dataType: 'json',
        success : function(search_response) {
          var treated_res = $.map(search_response, function (value, key) {
            return {
                data: value,
                value: value
            };
          });
          res(treated_res);
        }
      })

    },
    // appendTo: "#respostas-container"
  });
});
