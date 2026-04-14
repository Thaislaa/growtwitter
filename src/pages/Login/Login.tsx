import {
  Button,
  Card,
  CardContent,
  InputLabel,
  TextField,
  Typography,
  Box,
  useTheme,
} from '@mui/material'
import '../Login/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const theme = useTheme()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://growtwitter-1.onrender.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      )

      if (!response.ok) {
        alert('Usuário ou senha incorretos')
        return
      }

      const result = await response.json()

      const authUser = result.data.authUser

      const user = {
        id: authUser.id,
        name: authUser.name,
        username: authUser.username,
        imageUrl: authUser.imageUrl || null,
      }

      localStorage.setItem('token', result.data.authToken)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('userId', user.id)

      console.log('LOGIN OK - indo para home')
      navigate('/home')
    } catch (error) {
      console.error(error)
      alert('Erro ao tentar fazer login')
    }
  }

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        borderRadius: 0,
        padding: 0,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : theme.palette.background.default,
        p: 2,
      }}
    >
      <div className="div-message">
        <Box
          className="box"
          sx={{
            flex: 1.5,
            backgroundColor: theme.palette.primary.main,
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.text.primary
                  : theme.palette.background.paper,
              letterSpacing: '0.5px',
              fontSize: '32px',
            }}
          >
            Growtwitter
          </Typography>

          <Typography
            variant="caption"
            sx={{
              mt: 1.5,
              mb: 1.5,
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.text.primary
                  : theme.palette.background.paper,
            }}
          >
            Trabalho final do bloco intermediário
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.2,
              letterSpacing: '0.5px',
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.text.primary
                  : theme.palette.background.default,
            }}
          >
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </Typography>
        </Box>

        <CardContent
          className="card-form"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 650,
            alignItems: 'center',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.background.default
                : theme.palette.background.paper,
          }}
        >
          <div className="div-form">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Entrar no Growtwitter
            </Typography>

            <form onSubmit={handleSubmit}>
              <InputLabel
                sx={{
                  fontSize: 14,
                  mb: 0,
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                }}
              >
                Username
              </InputLabel>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  mb: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& input': {
                      padding: '8px 4px',
                    },
                  },
                }}
              />

              <InputLabel
                sx={{
                  fontSize: 14,
                  mb: 0.5,
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                }}
              >
                Password
              </InputLabel>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  mb: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& input': {
                      padding: '8px 4px',
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: 'primary.main', borderRadius: 2 }}
                type="submit"
                onClick={() => console.log('clicou')}
              >
                Entrar
              </Button>
            </form>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
