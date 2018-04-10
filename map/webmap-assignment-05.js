let mymap = L.map('webmap5').setView([39.8283, -98.5795], 4)
let coloredbasemapURL = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
let coloredbasemap = L.tileLayer(basemapURL).addTo(mymap)
