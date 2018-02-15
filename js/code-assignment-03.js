// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://www.arcgis.com/apps/View/index.html?appid=9f509aae7b95477e8008f3cabff244a6'
let projectTitle = 'Map of Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

let projectArray = [
  1,
  'https://www.arcgis.com/apps/View/index.html?appid=9f509aae7b95477e8008f3cabff244a6',
  'Map of Earthquakes',
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS',
  true,
  ['earthquakes', 'usgs']
]

let projectObject = {
  id:1,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=9f509aae7b95477e8008f3cabff244a6',
  title: 'Map of Earthquakes',
  description: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS',
  hasThumbnail: true
  keywords:['earthquakes', 'usgs']
}

// display messages in the browser's developer console, combining the values with text
console.log(projectObject)
