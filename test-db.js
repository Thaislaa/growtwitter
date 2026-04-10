import pkg from 'pg'
const { Client } = pkg

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // importante para Render
})

async function testConnection() {
  try {
    await client.connect()
    console.log('✅ Conexão com o banco realizada com sucesso!')
  } catch (err) {
    console.error('❌ Erro ao conectar no banco:', err)
  } finally {
    await client.end()
  }
}

testConnection()
