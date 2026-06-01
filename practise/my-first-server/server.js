import express from 'express'

const app = express()
const PORT = 3000

app.use((req, res, next) => {
  // 1. Get current time formatted cleanly
  const timestamp = new Date().toISOString()

  // 2. Print the formatted message using string interpolation
  console.log(`[${timestamp}] ${req.method} ${req.path}`)

  // 3. Move forward to the routes!
  next()
})

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

const userList = ['Alice', 'Bob', 'Charlie']

// GET /api/users  or  GET /api/users?name=alice
app.get('/api/users', (req, res) => {
  const { name } = req.query

  if (name) {
    const foundUser = userList.find(
      (user) => user.toLowerCase() === name.toLowerCase(),
    )
    return res.json({ user: foundUser || null })
  }

  res.json({ users: userList })
})

// GET /api/users/:id
app.get('/api/users/:id', requireAuth, (req, res) => {
  const { id } = req.params
  res.json({ user: `User number ${id}` })
})

// POST /api/users
app.post('/api/users', (req, res) => {
  res.status(201).json({ message: 'User created successfully' })
})

// 404 fallback — always last
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
