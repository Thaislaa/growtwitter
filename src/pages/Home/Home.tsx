import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { Menu } from '../../components/Menu'
import { TrendsCard } from '../../components/TrendsCard'
import { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
import { Post } from '../../components/Post'

interface HomeProps {
  toggleTheme: () => void
}

interface Tweet {
  id: string
  content: string
  createdAt: string
  username: string
  name: string
  authorId: string
  imageUrl?: string
  likesCount?: number
  likedByCurrentUser?: boolean
  replies?: Tweet[]
}

interface BackendLike {
  author: {
    id: string
  }
}

export function Home({ toggleTheme }: HomeProps) {
  const [openModal, setOpenModal] = useState(false)
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const theme = useTheme()

  function handleOpenModal(replyTweetId?: string) {
    console.log('CLICK NO COMENTÁRIO:', replyTweetId)

    setReplyTo(replyTweetId || null)
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
    setReplyTo(null)
  }

  async function handleDeleteTweet(id: string) {
    console.log('CHAMANDO DELETE:', id)

    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const response = await fetch(
        `https://growtwitter-1.onrender.com/tweets/tweets/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const data = await response.json()

      if (data.success) {
        loadFeed()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function loadFeed() {
    const token = localStorage.getItem('token')
    if (!token) return

    const payloadBase64 = token.split('.')[1]
    const payload = JSON.parse(atob(payloadBase64))
    const currentUserId = payload.id

    try {
      const response = await fetch(
        'https://growtwitter-1.onrender.com/tweets/feed',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      const text = await response.text()

      if (!response.ok) {
        console.log('ERRO HTTP')
        return
      }

      let data
      try {
        data = JSON.parse(text)
      } catch (err) {
        console.log('BACKEND NÃO ESTÁ RETORNANDO JSON')
        return
      }

      if (data.success) {
        const mappedTweets: Tweet[] = data.data.map((tweet: any) => ({
          id: tweet.id,
          content: tweet.content,
          createdAt: tweet.createdAt,
          username: tweet.author.username,
          name: tweet.author.name,
          authorId: tweet.author.id,
          imageUrl: tweet.author.imageUrl,
          likesCount: tweet.likes?.length || 0,
          likedByCurrentUser: tweet.likes?.some(
            (like: BackendLike) => like.author.id === currentUserId
          ),
          replies: tweet.replies?.map((reply: any) => ({
            id: reply.id,
            content: reply.content,
            createdAt: reply.createdAt,
            username: reply.author.username,
            name: reply.author.name,
            authorId: reply.author.id,
            imageUrl: reply.author.imageUrl,
            likesCount: reply.likes?.length || 0,
            likedByCurrentUser: reply.likes?.some(
              (like: BackendLike) => like.author.id === currentUserId
            ),
          })),
        }))

        mappedTweets.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )

        setTweets(mappedTweets)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadFeed()
  }, [])

  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}
        >
          {/* Menu */}
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
            <Menu
              onTweetar={() => handleOpenModal()}
              toggleTheme={toggleTheme}
            />
          </Grid>

          {/* Feed */}
          <Grid
            size={6}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              height: '100vh',
              overflowY: 'auto',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                padding: '12px',
                color: theme.palette.text.primary,
              }}
            >
              Página Inicial
            </Typography>

            {/* Posts */}
            {tweets.map((tweet) => {
              const repliesCount = tweet.replies?.length || 0

              return (
                <Box key={tweet.id} sx={{ position: 'relative' }}>
                  {/* Linha vertical */}
                  {repliesCount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '30px',
                        top: '30px',
                        height: `${repliesCount * 100}px`,
                        width: '2px',
                        backgroundColor: '#ccc',
                        zIndex: 0,
                      }}
                    />
                  )}

                  <Post
                    tweet={tweet}
                    onOpenModal={handleOpenModal}
                    onDelete={handleDeleteTweet}
                    repliesCount={tweet.replies?.length || 0}
                  />
                  {/* Replies */}
                  {tweet.replies?.map((reply) => (
                    <Post
                      key={reply.id}
                      tweet={reply}
                      isReply={true}
                      onDelete={handleDeleteTweet}
                      onOpenModal={handleOpenModal}
                    />
                  ))}
                </Box>
              )
            })}

            {/* Modal */}
            {openModal && (
              <Modal
                handleClose={handleCloseModal}
                replyTo={replyTo}
                reloadFeed={loadFeed}
              />
            )}
          </Grid>

          {/* Trends */}
          <Grid size={3}>
            <TrendsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
