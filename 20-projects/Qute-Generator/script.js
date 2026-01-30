let apiQuotes = []
const quoteContainer = document.getElementById('quote-generator')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
// const loader = document.getElementById('loader')

// // show loading
// function loading() {
//   loader.hidden = false
//   quoteContainer.hidden = true
// }

// // hide loading
// function complete() {
//   quoteContainer.hidden = false
//   loader.hidden = true
// }

// show new quote
function newQuote() {
  if (apiQuotes.length === 0) return

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

  authorText.textContent = quote.author || 'Unknown'

  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }

  quoteText.textContent = quote.text
}

// get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://dummyjson.com/quotes/random'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    // show the quote directly
    quoteText.textContent = data.quote
    authorText.textContent = data.author || 'Unknown'
  } catch (error) {
    console.log('no quotes', error)
  }
}

// tweet quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(tweetUrl, '_blank')
}

// event listners
newQuoteBtn.addEventListener('click', getQuotes)
twitterBtn.addEventListener('click', tweetQuote)
// newQuote()

getQuotes()
