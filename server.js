import express from 'express'
import path from 'path'

import { AuthRoutes } from './growtwitter-api/dist/routes/auth.routes.js'
import { UsersRoutes } from './growtwitter-api/dist/routes/users.routes.js'
import { TweetsRoutes } from './growtwitter-api/dist/routes/tweets.routes.js'
import { LikesRoutes } from './growtwitter-api/dist/routes/likes.routes.js'
import { FollowersRoutes } from './growtwitter-api/dist/routes/followers.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

const distPath = path.join(process.cwd(), 'dist')

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ ok: true })
})

app.use('/auth', AuthRoutes.bind())
app.use('/users', UsersRoutes.bind())
app.use('/tweets', TweetsRoutes.bind())
app.use('/likes', LikesRoutes.bind())
app.use('/followers', FollowersRoutes.bind())

app.use(express.static(distPath))

app.get((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server rodando na porta ${PORT}`)
})
