import express from 'express'

const app = express()

app.get('/hello-world', (req, res) => {
  res.status(200).json({ msg: 'Hello World' })
})

app.listen(3000, () => {
  console.log('Server running at port 3000 ')
})
