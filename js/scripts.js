var map = L.map('map').setView([34, -105], 3);


L.tileLayer('https://api.mapbox.com/styles/v1/elenambailey/cloq5iebz006b01pw1r7g1l2d/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxlbmFtYmFpbGV5IiwiYSI6ImNscDBhcnAwNjA3Yjgya2xvNmIyeW1kMGIifQ.2A8p4AsW7ZKFoipj7gA3mg', {
   maxZoom: 19,
}).addTo(map);


fetch('https://github.com/elenambailey/lab4/blob/main/data/ne_10m_ports.geojson%202')
   .then(response => response.json())
   .then(data => {
       L.geoJSON(data, {
           onEachFeature: function (feature, layer) {
               layer.bindPopup("Port Name: " + feature.properties.name); // Adjust popup content here
           }
       }).addTo(map);
   })
   .catch(error => console.error('Error: ', error));


var popup = L.popup();


function onMapClick(e) {
   popup
       .setLatLng(e.latlng)
       .setContent("You clicked the map at " + e.latlng.toString())
       .openOn(map);
}


map.on('click', onMapClick);
