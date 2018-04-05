let mymap = L.map('webmap3').setView([39.295431, -76.61124], 13)

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(mymap)

let redIcon = L.icon({
   iconUrl: 'leaf-red.png',
   shadowUrl: 'leaf-shadow.png',
   iconSize: [38, 95], // size of the icon
   shadowSize: [50, 64], // size of the shadow
   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
   shadowAnchor: [4, 62],  // the same for the shadow
   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
 })

let markerCoords = [39.2976, -76.6156]
let markerOptions = {icon: redIcon}

let marker = L.marker(markerCoords, markerOptions).addTo(mymap)

let portArea = [
  [39.32, -76.6056741],
  [39.26, -76.58324],
  [39.22, -76.6097514]
]
let portStyle = {
  color : 'purple',
  fillColor: 'yellow'
}

let polygon = L.polygon(portArea, portStyle).addTo(mymap)
