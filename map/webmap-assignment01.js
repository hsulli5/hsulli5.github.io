let mymap = L.map('webmap1').setView([39.295431, -76.61124], 13)
let basemap = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemap).addTo(mymap)
let marker = L.marker([39.295431, -76.61124]).addTo(mymap)
let polygon = L.polygon([
  [39.32, -76.6056741],
  [39.26, -76.58324],
  [39.22, -76.6097514]
]).addTo(mymap);

myshape.bindPopup('The Washington Monument')
mypoint.bindPopup('Port of Baltimore')

mymap.on('click', function (event) {
  console.log('You clicked the map at Baltimore' + event.latlng)
})


var latlngs = [
    [39.2845, 76.6016],
    [39.275322, -76.588181],
    [39.2841, -76.6215]
];
var polyline = L.polyline(latlngs, {color: 'purple'}).addTo(mymap);
