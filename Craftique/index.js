require('dotenv').config()

const express = require('express')
const app = express()
// const port = process.env.PORT
const port=4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res) => {
  res.send("Soumya10804")
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>YOUTUBE</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

