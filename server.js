import express from 'express'
import path from 'path'

import { AuthRoutes } from './growtwitter-api/build/routes/auth.routes.js'
import { UsersRoutes } from './growtwitter-api/build/routes/users.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

const distPath = path.resolve('dist')

app.use(express.json())

// BACKEND
app.use('/auth', AuthRoutes.bind())
app.use('/users', UsersRoutes.bind())

// FRONTEND
app.use(express.static(distPath))

app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server rodando na porta ${PORT}`)
})