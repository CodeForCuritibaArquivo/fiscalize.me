
$(document).ready(function(){

  var map = L.map('map').setView([-25.4419, -49.2529], 12);

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
  map.addLayer(markers);
})
