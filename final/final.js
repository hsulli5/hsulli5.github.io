let mymap = L.map('final').setView([41.9102415,12.3959128], 10)
let grayBasemapURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let grayBasemap = L.tileLayer(grayBasemapURL)
grayBasemap.addTo(mymap)

let topoURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let topoBasemap = L.tileLayer(topoURL)


let satelliteURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let satelliteBasemap = L.tileLayer(satelliteURL)


let myBasemaps = {
  'Gray': grayBasemap,
  'Topography': topoBasemap,
  'Satellite': satelliteBasemap
}

L.control.layers(myBasemaps).addTo(mymap)

let Icon = L.icon({
   iconUrl: 'marker.icon.png',
   iconSize: [32, 64],
   shadowSize: [50, 64],
   iconAnchor: [22, 94],
   shadowAnchor: [4, 62],
   popupAnchor: [-3, -76]
 })
let markerOptions = {icon: Icon}

let marker1 = [41.8919, 12.4799]
L.marker(marker1, markerOptions).addTo(mymap).bindPopup('Theatre of Marcellus')


let marker2 = [41.9029, 12.4545]
L.marker(marker2, markerOptions).addTo(mymap).bindPopup('Sistine Chapel')


let marker3 = [41.8902, 12.4922]
L.marker(marker3, markerOptions).addTo(mymap).bindPopup('Rome Colosseum')


let marker4 = [41.8986, 12.4769]
L.marker(marker4, markerOptions).addTo(mymap).bindPopup('Pantheon')



let cityArea = [
  [41.9107078,12.4741692],
  [41.8916355,12.4892358],
  [41.9020515,12.4628115]
]
let cityStyle = {
  color : '#900CAA',
  fillColor: '#DF88F0'
}

let polygon = L.polygon(cityArea, cityStyle).addTo(mymap)
polygon.bindPopup('Downtown Rome')
