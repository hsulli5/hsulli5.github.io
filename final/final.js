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

let orangeIcon = L.icon({
   iconUrl: 'leaf-orange.png',
   shadowUrl: 'leaf-shadow.png',
   iconSize: [38, 95],
   shadowSize: [50, 64],
   iconAnchor: [22, 94],
   shadowAnchor: [4, 62],
   popupAnchor: [-3, -76]
 })

let markerCoords = [
  [41.8918623,12.4785579],
  [41.8985353,12.438922],
  [41.9029508,12.4522948],
  [41.8907013,12.4864608]
]
let markerOptions = {icon: orangeIcon}

let marker = L.marker(markerCoords, markerOptions).addTo(mymap)

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
