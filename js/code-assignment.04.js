// assign values to a set of variables representing a project's metadata
let projectId = 2
let projectUrl = 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d'
let projectTitle = 'Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. Info pulled from USGS.'
let projectThumb = true
let projectKeywords = ['USGS', 'Earthquakes']

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  projectId, 2
  projectUrl, 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d'
  projectTitle, 'Earthquakes'
  projectDesc, 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. Info pulled from USGS.'
  projectThumb, true
  projectKeywords, ['USGS', 'Earthquakes']
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
  title: 'Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. Info pulled from USGS.',
  thumb: true,
  projectKeywords: ['USGS', 'Earthquakes']
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['Earthquakes'])
