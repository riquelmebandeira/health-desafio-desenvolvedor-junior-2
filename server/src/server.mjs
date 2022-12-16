import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3001, () => console.log('Server online on port 3001!'))
