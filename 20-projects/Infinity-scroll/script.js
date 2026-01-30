const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []
// unsplash API
const count = 10
const apiKey = 'FVF8lRGwREhsc45ZxCMOWZHk_DPCPNxr2rMad9kb9p0'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    console.log(photosArray)
  } catch (error) {
    // catch error here
  }
}

getPhotos()
