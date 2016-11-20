
$(document).ready(function(){

  var cidade = window.location.search.substr(8,window.location.search.length);
  cidade = cidade.split("+").join(" ");
  cidade = decodeURI(cidade);
  if(!cidade) {
    cidade = "";
  }

  $.ajax({
      url : "/mapa" ,
      method : "POST",
      data: {cidade : cidade},
      dataType: 'json',
      success : function(lista_cidades) {
        console.log(lista_cidades);
      },
  })


  $.ajax({
    url:  "http://nominatim.openstreetmap.org/search?format=json&city=" + cidade,
    method: "GET",
    success: function(response){
      //Talvez colocar várias respostas para o usuario
      console.log(response);

      if(response.length > 0) {
        var coords_response = {
          lat: response[0].lat,
          lon: response[0].lon,
          zoom: 11,
        }
      } else {
        coords_response = {
          lat: -15.7754461,
          lon: -47.797089,
          zoom: 5
        }
      }

      drawMap(coords_response);
    }
  })



})

function drawMap(coords){



  var map = L.map('map').setView([coords.lat, coords.lon], coords.zoom);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var markers = L.markerClusterGroup();

  for(var i = 0; i < 1000 ; i++) {
    var marker = L.marker([-26 + ((Math.random()*1000) / 1000), -50 + ((Math.random()*1000) / 1000)])
    .bindPopup('Fiscalize.me.<br> Versão 0.1')
    markers.addLayer(marker);
    //.openPopup();
  }
  for(var i = 0; i < 1000 ; i++) {
    var marker = L.marker([-26 + ((Math.random()*10000) / 1000), -56 + ((Math.random()*10000) / 1000)])
    .bindPopup('Fiscalize.me.<br> Versão 0.1')
    markers.addLayer(marker);
    //.openPopup();
  }
  map.addLayer(markers);
}

function buscaPontosCidade(){

}

function buscaTodosPontos(){

}
