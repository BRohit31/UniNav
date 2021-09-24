//for url,access token and attribute (for multipurpose use)
var mbAttr = '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5pcmJhbjIiLCJhIjoiY2t0c2JlZzk5MTI5dTJ1bnFtbzlhMGQ1bSJ9.BTK7hzj6maA_Qud3O7RxjA';

//Creating title view of the map
var grayscale = L.tileLayer(mbUrl, {
    id: 'mapbox/dark-v10', 
    tileSize: 512, 
    zoomOffset: -1, 
    attribution: mbAttr
});


//icons for well lit areas 
const icon_lit = L.icon({
    iconUrl: '/icons/Well-lit.svg',
    iconSize: [30,30],
});

//for creating clusters of markers of well lit areas

var lit= L.layerGroup();

//markers of well lit areas
L.marker([ 22.496711670997534,88.37232828140259 ], {icon : icon_lit})
    .bindPopup('<h1 class="text-center">Street beside JU Staff Canteen</h1>')
    .closePopup()
    .addTo(lit);

L.marker([ 22.50092313260012,88.37033405900002 ], {icon : icon_lit})
    .bindPopup("<h1 class='text-center'>Street adjacent to Arts Department</h1>")
    .closePopup()
    .addTo(lit);

L.marker([  22.49991705222327,88.37098449468611 ], {icon : icon_lit})
    .bindPopup('<h1 class="text-center">Street adjacent to Science Department</h1>')
    .closePopup()
    .addTo(lit);

L.marker([ 22.498660680492886,88.37217271327971 ], {icon : icon_lit})
    .bindPopup('<h1 class="text-center">Street adjacent to Central Library</h1>')
    .closePopup()
    .addTo(lit);

L.marker([ 22.495880266984035,88.37177038192748 ], {icon : icon_lit})
    .bindPopup('<h1 class="text-center">Street opposite to EE Department</h1>')
    .closePopup()
    .addTo(lit);

//for creating maps
var map = L.map('map', {
	center: [22.4998, 88.3715],
	zoom: 17,
	layers: [grayscale,lit],
    zoomControl : false,
});

//for zoom button
L.control.zoom({
    position:'bottomright'
}).addTo(map);

//fixing zoom control
map.options.minZoom = 16;
map.options.maxZoom = 18;

//fixing map bounds

var bounds = [[ 22.514301323395372 , 88.39994430541992],[ 22.484009602284136 , 88.34329538047314]];
map.fitBounds(bounds);
map.setMaxBounds(bounds);

var overlays = {
	"<img src='/icons/Well-lit.svg' width=30 height=30 /> Well lit Areas": dept
};

//for the filters options
L.control.layers(null,overlays).addTo(map);