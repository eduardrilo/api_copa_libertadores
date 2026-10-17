import express from 'express'
import cors from 'cors'
import { paises, clubes } from './datos.js'

const app = express()
app.use(cors())

const PORT = 3000

// Ruta principal de bienvenida
app.get('/', (req, res) => {
  res.json({ mensaje: 'API Copa Libertadores funcionando' })
})

// Obtener todos los clubes o filtrarlos por país
app.get('/api/clubes', (req, res) => {
  const { pais } = req.query

  // Si no se indica país, devolver todos los clubes
  if (pais === undefined) {
    return res.json(clubes)
  }

  // Buscar el país por nombre
  const paisEncontrado = paises.find(p =>
    p.nombre.toLowerCase() === String(pais).toLowerCase()
  )

  // Si el país no existe, devolver error 404
  if (!paisEncontrado) {
    return res.status(404).json({
      error: 'No existe el país solicitado'
    })
  }

  // Filtrar los clubes que pertenecen a ese país
  const clubesDelPais = clubes.filter(c =>
    c.paisId === paisEncontrado.id
  )

  res.json(clubesDelPais)
})

// Obtener un club por su ID
app.get('/api/clubes/:id', (req, res) => {
  const id = Number(req.params.id)

  // Buscar el club por su ID
  const club = clubes.find(c => c.id === id)

  // Si el club no existe, devolver error 404
  if (!club) {
    return res.status(404).json({
      error: `No existe el club ${req.params.id}`
    })
  }

  res.json(club)
})

// Obtener los títulos de un club por su nombre
app.get('/api/titulos/:club', (req, res) => {
  const nombreClub = req.params.club.toLowerCase()

  // Buscar el club por su nombre
  const clubEncontrado = clubes.find(c =>
    c.nombre.toLowerCase() === nombreClub
  )

  // Si el club no existe, devolver error 404
  if (!clubEncontrado) {
    return res.status(404).json({
      error: 'No existe el club solicitado'
    })
  }

  // Devolver los años de los títulos
  res.json(clubEncontrado.titulos)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(` API escuchando en http://localhost:${PORT}`)
})