let projectData = []

projectData[0] = {
  id: 1,
  url: "http://arcg.is/2FbRnLQ",
  title: 'Map of Austin, TX',
  desc: 'This is a story map of Austin, TX.',
  thumb: true,
  projectKeywords: ['Austin', 'story', 'map']
},


projectData[1] = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
  title: 'Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. Info pulled from USGS.',
  thumb: false,
  projectKeywords: ['USGS', 'Earthquakes']
}

for (let i=0; i < projectData.length; i++) {
  createTitle (projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
}
