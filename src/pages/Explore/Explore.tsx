import {
  Box,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'
import { Menu } from '../../components/Menu'
import { TrendsCard } from '../../components/TrendsCard'
import { Modal } from '../../components/Modal'
import { useState } from 'react'
import { Hr } from '../../components/Hr'

interface ExploreProps {
  toggleTheme: () => void
}

export function Explore({ toggleTheme }: ExploreProps) {
  const [openModal, setOpenModal] = useState(false)
  const theme = useTheme()

  function handleTweetar() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  return (
    <>
      {openModal && <Modal handleClose={handleCloseModal} />}
      <Box sx={{ backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}
          >
            <Grid
              size={2}
              sx={{
                paddingTop: '16px',
                paddingRight: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Menu onTweetar={handleTweetar} toggleTheme={toggleTheme} />
            </Grid>

            <Grid
              size={6}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                height: '100vh',
                overflowY: 'auto',
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    padding: '12px',
                    color: theme.palette.text.primary,
                  }}
                >
                  Explorar
                </Typography>
                <Hr />
              </Box>

              <Box style={{ padding: '12px' }}>
                <CardContent sx={{ padding: '0 0', mb: '8px' }}>
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
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assuntos sobre esportes
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Assuntos do momento no Brasil
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto do Momento
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Música - Assunto do Momento
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto sobre música
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Cinema - Assunto do Momento
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto sobre filmes e cinema
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Entretenimento - Assunto do Momento
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto sobre Entretenimento
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Assunto do Momento em Porto Alegre
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto do Momento em Porto Alegre
                  </Typography>
                </CardContent>

                <CardContent sx={{ padding: '0 0', mt: '8px', mb: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Daphne - Principal Assunto do Momento
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 'bold',
                    }}
                  >
                    Assunto sobre a Daphne
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid size={3}>
              <TrendsCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
