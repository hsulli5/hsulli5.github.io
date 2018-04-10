let mymap = L.map('webmap5').setView([39.8283, -98.5795], 4)
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
