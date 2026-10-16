import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const PORT = 3000

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Copa Libertadores funcionando' })
})

app.listen(PORT, () => {
  console.log(`🏆 API escuchando en http://localhost:${PORT}`)
})