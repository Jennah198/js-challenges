// unsplash API
const count = 10
const apiKey = 'FVF8lRGwREhsc45ZxCMOWZHk_DPCPNxr2rMad9kb9p0'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    // catch error here
  }
}

getPhotos()
