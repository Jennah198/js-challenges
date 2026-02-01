// DOM Elements
const button = document.getElementById('button')
const audioElement = document.getElementById('audio')

// =====================
// VoiceRSS Javascript SDK
// =====================
const VoiceRSS = {
  speech: function (e) {
    this._validate(e)
    this._request(e)
  },

  _validate: function (e) {
    if (!e) throw 'The settings are undefined'
    if (!e.key) throw 'The API key is undefined'
    if (!e.src) throw 'The text is undefined'
    if (!e.hl) throw 'The language is undefined'

    if (e.c && e.c.toLowerCase() !== 'auto') {
      let supported = false
      const audio = new Audio()

      switch (e.c.toLowerCase()) {
        case 'mp3':
          supported = audio.canPlayType('audio/mpeg').replace('no', '')
          break
        case 'wav':
          supported = audio.canPlayType('audio/wav').replace('no', '')
          break
        case 'aac':
          supported = audio.canPlayType('audio/aac').replace('no', '')
          break
        case 'ogg':
          supported = audio.canPlayType('audio/ogg').replace('no', '')
          break
        case 'caf':
          supported = audio.canPlayType('audio/x-caf').replace('no', '')
          break
      }

      if (!supported)
        throw 'The browser does not support the audio codec ' + e.c
    }
  },

  _request: function (e) {
    const requestData = this._buildRequest(e)
    const xhr = this._getXHR()

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.responseText.indexOf('ERROR') === 0) {
          console.error(xhr.responseText)
          return
        }

        audioElement.src = xhr.responseText
        button.disabled = true

        audioElement
          .play()
          .catch((err) => console.log('Audio play blocked:', err))

        audioElement.onended = () => {
          button.disabled = false
        }
      }
    }

    xhr.open('POST', 'https://api.voicerss.org/', true)
    xhr.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8',
    )
    xhr.send(requestData)
  },

  _buildRequest: function (e) {
    const codec =
      e.c && e.c.toLowerCase() !== 'auto' ? e.c : this._detectCodec()

    return (
      'key=' +
      encodeURIComponent(e.key || '') +
      '&src=' +
      encodeURIComponent(e.src || '') +
      '&hl=' +
      encodeURIComponent(e.hl || '') +
      '&r=' +
      encodeURIComponent(e.r || '') +
      '&c=' +
      encodeURIComponent(codec || '') +
      '&f=' +
      encodeURIComponent(e.f || '') +
      '&ssml=' +
      encodeURIComponent(e.ssml || '') +
      '&b64=true'
    )
  },

  _detectCodec: function () {
    const audio = new Audio()

    if (audio.canPlayType('audio/mpeg').replace('no', '')) return 'mp3'
    if (audio.canPlayType('audio/wav').replace('no', '')) return 'wav'
    if (audio.canPlayType('audio/aac').replace('no', '')) return 'aac'
    if (audio.canPlayType('audio/ogg').replace('no', '')) return 'ogg'
    if (audio.canPlayType('audio/x-caf').replace('no', '')) return 'caf'

    return ''
  },

  _getXHR: function () {
    return new XMLHttpRequest()
  },
}

// =====================
// Tell joke using VoiceRSS
// =====================
function tellMe(joke) {
  VoiceRSS.speech({
    key: '7e2a16e0680a4cfeb5a79bab538665d8',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  })
}

// =====================
// Get joke from Joke API
// =====================
async function getJokes() {
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    let joke = ''
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`
    } else {
      joke = data.joke
    }

    tellMe(joke)
  } catch (error) {
    console.log('Joke API error:', error)
  }
}

// =====================
// BUTTON EVENT LISTENER (CRITICAL)
// =====================
button.addEventListener('click', getJokes)
