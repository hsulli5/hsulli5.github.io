let mymap = L.map('webmap4').setView([39.8283, -98.5795], 4)
basemapURL = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemapURL).addTo(mymap)


mygeoJsonStyle = function (state) {
  let age = state.properties.FEMALES
  let statecolor = 'yellow'
  if (age < 3132934) {statecolor = 'orange'}
  let myStyle = {
    color: statecolor,
    weight: 1,
    fillOpacity: 0.25
  }
  return myStyle
}

function createPopup (state, statelayer) {
  let name = state.properties.STATE_NAME
 let females = state.properties.FEMALES
 statelayer.bindPopup(name + 'has this many females in their population' +  females + '<br>National average: 3,132,934')
}

mygeoJsonOptions = {
  style : mygeoJsonStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateData, mygeoJsonOptions).addTo(mymap)
