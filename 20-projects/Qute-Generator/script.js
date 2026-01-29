// show new quote
function newQuote() {
  //   loading()
  // pick a random quote from apiQuotes array
  const quote = LocalQuotes[Math.floor(Math.random() * LocalQuotes.length)]
  //   check if author field is blank and replace it with "unknown"
  if (!quote.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author
  }
  // check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  //   set quote and hide loader
  quoteText.textContent = quote.text
  //   complete()
}

// tweet quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(tweetUrl, '_blank')
}

// event listners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
newQuote()
