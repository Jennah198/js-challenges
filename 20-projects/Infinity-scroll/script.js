const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []
// unsplash API
let count = 5
const apiKey = 'FVF8lRGwREhsc45ZxCMOWZHk_DPCPNxr2rMad9kb9p0'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// check if all images were loaded
function imageLoaded() {
  imagesLoaded++
  console.log('image loaded', imagesLoaded)
  if (imagesLoaded === totalImages) {
    ready = true
    count = 30
  }
}
// helper function to set attributes on dom elements
function setAttribute(elements, attributes) {
  for (const key in attributes) {
    elements.setAttribute(key, attributes[key])
  }
}

// create elements for links and photos, add to DOM
function displayPhotos() {
  imagesLoaded = 0
  totalImages = photosArray.length
  console.log('total images', totalImages)
  // run func for each object in photosArray
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a')
    // item.setAttribute('href', photo.links.html)
    // item.setAttribute('target', '_blank')
    // create <img> for photo
    setAttribute(item, {
      href: photo.links.html,
      target: '_blank',
    })
    const img = document.createElement('img')
    // img.setAttribute('src', photo.urls.regular)
    // img.setAttribute('alt', photo.alt_description)
    // img.setAttribute('title', photo.alt_description)
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })
    // event listener, check when each is finished loading
    img.addEventListener('load', imageLoaded)
    // put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {
    // catch error here
  }
}

// check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false
    getPhotos()
  }
})

getPhotos()
