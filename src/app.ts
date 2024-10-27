import express from 'express'
import mongoose from 'mongoose'
import { envs } from './config/envs.js'

const app = express()

app.get('/hello-world', (req, res) => {
  res.status(200).json({ msg: 'Hello World' })
})

await mongoose.connect(envs.connectionString)

app.listen(envs.port, () => {
  console.log('Server running at port 3000 ')
})
