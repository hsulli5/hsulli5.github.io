let mymap = L.map('webmap4').setView([39.8283, -98.5795], 4)
basemapURL = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemapURL).addTo(mymap)


mygeoJsonStyle = function (state) {
  let age = state.properties.FEMALES
  let statecolor = 'yellow'
  if (age<55) {statecolor = 'orange'}
  let myStyle = {
    color: statecolor,
    weight: 1,
    fillOpacity: 0.25
  }
  return myStyle
}

function createPopup (state, statelayer) {
  let name = state.properties.STATE_NAME
 let age = state.properties.MED_AGE
 statelayer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}

mygeoJsonOptions = {
  style : mygeoJsonStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateData, mygeoJsonOptions).addTo(mymap)
