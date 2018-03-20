for (let i=0; i < projectData.length; i++) {
  createTitle (projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
}

function createTitle(title) {
  console.log('Title: ' + title);
}
function createThumbnail() {
  if (projectData[i].thumb === true) {
    console.log('images/ss-project-' + id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
