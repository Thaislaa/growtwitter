import { Box, Typography, useTheme } from '@mui/material'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useState } from 'react'
import { Hr } from './Hr'

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
}

interface PostProps {
  tweet: Tweet
  onDelete?: (id: string) => void
  onOpenModal?: (id: string) => void
  isReply?: boolean
  repliesCount?: number
}

function formatTweetDate(createdAt: string) {
  const now = new Date()
  const tweetDate = new Date(createdAt)
  const diffMs = now.getTime() - tweetDate.getTime()

  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMinutes < 1) return `agora`
  if (diffMinutes < 60) return `${diffMinutes}m`
  if (diffHours < 24) return `${diffHours}h`
  return `${diffDays}d`
}

export function Post({
  tweet,
  onDelete,
  onOpenModal,
  isReply = false,
  repliesCount = 0,
}: PostProps) {
  const theme = useTheme()
  const [likesCount, setLikesCount] = useState(tweet.likesCount || 0)
  const [liked, setLiked] = useState(tweet.likedByCurrentUser || false)

  const token = localStorage.getItem('token')

  let currentUserId = null

  if (token) {
    const payloadBase64 = token.split('.')[1]
    const payload = JSON.parse(atob(payloadBase64))
    currentUserId = payload.id
  }

  const canDelete = currentUserId === tweet.authorId

  async function handleLikeToggle() {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const method = liked ? 'DELETE' : 'POST'

      const response = await fetch('https://growtwitter-1.onrender.com/likes', {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tweetId: tweet.id }),
      })

      const data = await response.json()

      if (data.success) {
        const newLiked = !liked
        setLiked(newLiked)
        setLikesCount((prev) => (newLiked ? prev + 1 : prev - 1))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {!isReply && <Hr />}

      <Box
        sx={{
          position: 'relative',
          padding: '12px',
          display: 'flex',
        }}
      >
        <Box>
          <img
            src={tweet.imageUrl || undefined}
            alt={tweet.name}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '8px',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: '12px',
                fontWeight: 'bold',
                mr: '8px',
              }}
            >
              {tweet.name}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: '12px' }}
            >
              @{tweet.username} • {formatTweetDate(tweet.createdAt)}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.primary }}
          >
            {tweet.content}
          </Typography>

          <Box
            style={{
              display: 'flex',
              marginTop: '8px',
              marginRight: '12px',
              flexDirection: 'row',
            }}
          >
            {/* Comentários */}
            {!isReply && (
              <span
                style={{
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '24px',
                  color: theme.palette.text.secondary,
                  cursor: 'pointer',
                }}
                onClick={() => onOpenModal?.(tweet.id)}
              >
                <ChatBubbleOutlineOutlinedIcon
                  sx={{
                    width: '15px',
                    marginRight: '4px',
                    color: theme.palette.text.secondary,
                  }}
                />
                {repliesCount || 0}
              </span>
            )}

            {/* Likes */}
            <span
              style={{
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                marginRight: '24px',
                color: liked ? 'red' : theme.palette.text.secondary,
                cursor: 'pointer',
              }}
              onClick={handleLikeToggle}
            >
              <FavoriteBorderOutlinedIcon
                sx={{
                  width: '15px',
                  marginRight: '4px',
                  color: liked ? 'red' : theme.palette.text.secondary,
                }}
              />
              {likesCount}
            </span>

            {/* Delete */}
            {canDelete && onDelete && (
              <DeleteOutlineOutlinedIcon
                onClick={() => {
                  if (window.confirm('Deseja excluir este tweet?')) {
                    onDelete(tweet.id)
                  }
                }}
                sx={{
                  width: '15px',
                  marginRight: '4px',
                  color: theme.palette.text.secondary,
                  cursor: 'pointer',
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}
