import { Card, CardContent, Typography, useTheme } from '@mui/material'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

export function TrendsCard() {
  const theme = useTheme()
  return (
    <Card
      sx={{
        mt: '24px',
        ml: '16px',
        padding: '8px 12px',
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.divider,
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: theme.palette.text.primary,
        }}
      >
        O que está acontecendo?
      </Typography>

      <CardContent sx={{ padding: '8px 0' }}>
        <Typography
          sx={{
            fontSize: '10px',
            color: theme.palette.text.secondary,
          }}
        >
          Esportes - há 45min
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
        >
          Assuntos sobre esportes
        </Typography>
      </CardContent>

      <CardContent sx={{ padding: '8px 0' }}>
        <Typography
          sx={{ fontSize: '10px', color: theme.palette.text.secondary }}
        >
          Assuntos do momento no Brasil
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
        >
          Assunto do Momento
        </Typography>
      </CardContent>

      <CardContent sx={{ padding: '8px 0' }}>
        <Typography
          sx={{ fontSize: '10px', color: theme.palette.text.secondary }}
        >
          Música - Assunto do Momento
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
        >
          Assunto sobre música
        </Typography>
      </CardContent>

      <CardContent sx={{ padding: '8px 0' }}>
        <Typography
          sx={{ fontSize: '10px', color: theme.palette.text.secondary }}
        >
          Cinema - Assunto do Momento
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
        >
          Assunto sobre filmes e cinema
        </Typography>
      </CardContent>

      <Link
        component={RouterLink}
        underline="none"
        to={'/explore'}
        sx={{
          fontSize: '10px',
          ':hover': { color: theme.palette.primary.main },
        }}
      >
        {'Mostrar mais'}
      </Link>
    </Card>
  )
}
