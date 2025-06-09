import express from 'express'
import cors from 'cors'
import path from 'path'

import likesRouter from '../Backend/routes/like.routes.js'

const app = express()
const PORT = process.env.PORT || 1000

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve('../Frontend')))

app.use(likesRouter)

app.get('/', (req, res) => {
  const filePath = path.resolve('../Frontend/index.html')
  res.sendFile(filePath)
})

app.listen(PORT, () => {
    console.log(`Server Encendido http://localhost:${PORT}`)
})
