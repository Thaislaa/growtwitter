import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { Menu } from '../../components/Menu'
import { TrendsCard } from '../../components/TrendsCard'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import { Link } from 'react-router-dom'
import { Hr } from '../../components/Hr'
import { Fragment, useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
import { Post } from '../../components/Post'

interface ProfileProps {
  toggleTheme: () => void
}

type Tweet = {
  id: string
  content: string
  createdAt: string
  username: string
  name: string
  authorId: string
  imageUrl?: string
  likesCount?: number
  likedByCurrentUser?: boolean
}

export function Profile({ toggleTheme }: ProfileProps) {
  const [openModal, setOpenModal] = useState(false)
  const theme = useTheme()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const [tweets, setTweets] = useState<Tweet[]>([])

  async function loadTweets() {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    if (!userId || !token) return

    try {
      const response = await fetch(
        `https://growtwitter-1.onrender.com/tweets/users/${userId}/tweets`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await response.json()
      if (data.success) {
        const authUserId = JSON.parse(localStorage.getItem('user') || '{}').id

        const mappedTweets = data.data.map((tweet: any) => ({
          id: tweet.id,
          content: tweet.content,
          createdAt: tweet.createdAt,
          username: tweet.author.username,
          name: tweet.author.name,
          authorId: tweet.author.id,
          imageUrl: tweet.author.imageUrl,
          likesCount: tweet.likes.length,
          likedByCurrentUser: tweet.likes.some(
            (like: any) => like.author.id === authUserId
          ),
        }))

        setTweets(mappedTweets)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeleteTweet(tweetId: string) {
    const token = localStorage.getItem('token')

    try {
      const response = await fetch(
        `https://growtwitter-1.onrender.com/tweets/tweets/${tweetId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await response.json()

      if (data.success) {
        setTweets((prevTweets) =>
          prevTweets.filter((tweet) => tweet.id !== tweetId)
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadTweets()
  }, [])

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
              <Box sx={{ display: 'flex', margin: '16px 0 8px 8px' }}>
                <Box sx={{ display: 'flex' }}>
                  <Link to={'/Home'} style={{ display: 'flex' }}>
                    <KeyboardBackspaceOutlinedIcon
                      sx={{
                        marginRight: '24px',
                        color: theme.palette.text.primary,
                      }}
                    />
                  </Link>
                </Box>

                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.text.primary,
                      fontSize: '14px',
                    }}
                  >
                    Perfil de @{user.username}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {tweets.length} {tweets.length === 1 ? 'Tweet' : 'Tweets'}
                  </Typography>
                </Box>
              </Box>

              <Hr />

              <Box sx={{ paddingBottom: '45px' }}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: '132px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '100%',
                      left: '55px',
                      transform: 'translate(-50%, -50%)',
                      border: `1px solid ${theme.palette.divider}`,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>

              <Box style={{ margin: '12px' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: theme.palette.text.primary,
                  }}
                >
                  {user.name}
                </Typography>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  @{user.username}
                </Typography>
              </Box>

              <Hr />

              {tweets.map((tweet) => (
                <Fragment key={tweet.id}>
                  <Post tweet={tweet} onDelete={handleDeleteTweet} />
                  <Hr />
                </Fragment>
              ))}
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
