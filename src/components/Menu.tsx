import { Box, Button, Typography, useTheme } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import TagIcon from '@mui/icons-material/Tag'
import PersonIcon from '@mui/icons-material/Person'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

interface MenuProps {
  onTweetar: () => void
  toggleTheme: () => void
}

export function Menu({ onTweetar, toggleTheme }: MenuProps) {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path
  const theme = useTheme()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <img
          src="https://deploy-growtwitter.vercel.app/assets/logo_growtweet-222727c3.svg"
          alt="Logo Growtwitter"
          style={{ width: '100px', paddingLeft: '8px', marginBottom: '12px' }}
        />

        <Link
          to="/home"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            textDecoration: 'none',
          }}
        >
          <Box sx={{ width: '30px', height: '30px' }}>
            {isActive('/home') ? <HomeIcon /> : <HomeOutlinedIcon />}
          </Box>
          <span style={{ fontSize: '16px' }}>Página Inicial</span>
        </Link>

        <Link
          to={'/explore'}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            textDecoration: 'none',
          }}
        >
          <Box sx={{ width: '30px', height: '30px' }}>
            <TagIcon />
          </Box>
          <span style={{ fontSize: '16px' }}>Explorar</span>
        </Link>

        <Link
          to={'/profile'}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            textDecoration: 'none',
          }}
        >
          <Box sx={{ width: '30px', height: '30px' }}>
            {isActive('/profile') ? (
              <PersonIcon />
            ) : (
              <PersonOutlineOutlinedIcon />
            )}
          </Box>
          <span style={{ fontSize: '16px' }}>Perfil</span>
        </Link>

        <Button
          variant="contained"
          sx={{
            borderRadius: '16px',
            textTransform: 'none',
            mt: '12px',
            cursor: 'pointer',
          }}
          onClick={onTweetar}
        >
          Tweetar
        </Button>
      </Box>

      <Box>
        <Box style={{ display: 'flex' }}>
          <img
            style={{
              width: '40px',
              marginRight: '8px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            src={user.imageUrl}
            alt={user.name}
          />
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: '12px' }}
            >
              @{user.username}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: '12px', mb: '24px', display: 'flex' }}>
          <Button
            variant="outlined"
            sx={{ fontSize: '10px', mr: '4px' }}
            onClick={handleLogout}
          >
            Sair
          </Button>

          <Button
            variant="outlined"
            sx={{ fontSize: '10px' }}
            onClick={toggleTheme}
          >
            Alterar tema
          </Button>
        </Box>
      </Box>
    </>
  )
}
