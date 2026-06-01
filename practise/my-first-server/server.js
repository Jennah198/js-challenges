import http from 'node:http'

// Create the server instance
const server = http.createServer((req, res) => {
  // 1. Grab the URL path from the request object
  const path = req.url

  // 2. Conditionally handle different URLs
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Welcome to my API')
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('This is the about page')
  } else {
    // Fallback for URLs that do not match any route
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Page Not Found')
  }
})

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
