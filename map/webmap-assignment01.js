let mymap = L.map('webmap1').setView([39.295431, -76.61124], 13)
let basemap = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemap).addTo(mymap)
let marker = L.marker([39.295431, -76.61124]).addTo(mymap)
let polygon = L.polygon([
  [39.30, -76.62],
  [39.24, -76.45],
  [39.45, -76.78]
]).addTo(mymap);

myshape.bindPopup('St. Katharine\'s and Wapping')
mypoint.bindPopup('London Bridge Station')

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
