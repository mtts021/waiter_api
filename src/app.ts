import { resolve } from 'node:path'
import express from 'express'
import mongoose from 'mongoose'
import { envs } from './config/envs.js'
import { router } from './router.js'

const app = express()

app.get('/hello-world', (req, res) => {
  res.status(200).json({ msg: 'Hello World' })
})

app.use('/uploads', express.static(resolve(import.meta.dirname, '..', 'uploads')))
app.use(express.json())
app.use(router)

await mongoose.connect(envs.connectionString)

app.listen(envs.port, () => {
  console.log('Server running at port 3000 ')
})
