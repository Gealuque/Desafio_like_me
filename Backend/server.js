import express from 'express'
import cors from 'cors'

import postRouter from '../Backend/routes/like.routes.js'

const app = express()
const PORT = process.env.PORT || 1000

app.use(express.json())
app.use(cors())

app.use(postRouter)


app.listen(PORT, () => {
    console.log(`Server Encendido http://localhost:${PORT}`)
})
