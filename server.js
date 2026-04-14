import express from 'express'
import path from 'path'

import { AuthRoutes } from './growtwitter-api/dist/routes/auth.routes.js'
import { UsersRoutes } from './growtwitter-api/dist/routes/users.routes.js'
import { TweetsRoutes } from './growtwitter-api/dist/routes/tweets.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

const distPath = path.resolve('dist')

app.use(express.json())

// BACKEND 
app.use('/auth', AuthRoutes.bind())
app.use('/users', UsersRoutes.bind())
app.use('/tweets', TweetsRoutes.bind())

// FRONTEND
app.use(express.static(distPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server rodando na porta ${PORT}`)
})