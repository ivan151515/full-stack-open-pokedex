/* eslint-disable no-console */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('5') // change this string to ensure a new version deployed
})
app.get('/health', (req,res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')

  res.sendStatus(200)
})
app.listen(PORT, () => {
  console.log('server started on port 5000')
})
