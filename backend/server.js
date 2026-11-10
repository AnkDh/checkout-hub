const express = require('express')
const cors = require('cors')
const logger = require('./src/middleware/logger')
const healthRoutes = require('./src/routes/healthRoutes')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.send('CheckoutHub backend is running')
})

app.use('/api', healthRoutes)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
