import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

const distPath = path.resolve('dist')

app.use(express.static(distPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server rodando na porta ${PORT}`)
})
