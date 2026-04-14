import { Box, Button, useTheme } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useState } from 'react'

interface ModalProps {
  handleClose: () => void
  replyTo?: string | null
  reloadFeed?: () => void
}

export function Modal({ handleClose, replyTo, reloadFeed }: ModalProps) {
  const theme = useTheme()
  const [content, setContent] = useState('')

  async function handleSubmit() {
    const token = localStorage.getItem('token')
    if (!token) return alert('Você precisa estar logado')

    const url = replyTo
      ? 'https://growtwitter-1.onrender.com/replies'
      : 'https://growtwitter-1.onrender.com/tweets'

    const body = replyTo ? { content, replyTo } : { content }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!data.success) {
        alert(data.message)
        return
      }

      setContent('')
      reloadFeed?.()
      handleClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0, // ajuste necessário
          left: 0, // ajuste necessário
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.background.default
                : theme.palette.background.paper,
            width: '250px',
            borderRadius: '8px',
          }}
        >
          <Box sx={{ padding: '16px 0 0 16px' }}>
            <Button
              sx={{
                padding: 0,
                display: 'flex',
                justifyContent: 'start',
                minWidth: 0,
              }}
              onClick={handleClose}
            >
              <CloseOutlinedIcon />
            </Button>
          </Box>

          <Box sx={{ margin: '16px' }}>
            <Box>
              <textarea
                name="tweetMessage"
                id="tweetMessage"
                placeholder="O que está acontecendo?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none',
                  width: '100%',
                  height: '200px',
                  resize: 'none',
                  outline: 'none',
                  overflow: 'hidden',
                  padding: '8px',
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? theme.palette.background.default
                      : theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              />
            </Box>
            <Box
              style={{ width: '100%', display: 'flex', justifyContent: 'end' }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={handleSubmit}
                sx={{
                  borderRadius: '16px',
                  textTransform: 'none',
                  mt: '8px',
                  cursor: 'pointer',
                  fontSize: '10px',
                }}
              >
                Tweetar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
