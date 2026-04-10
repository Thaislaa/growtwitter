import { Navigate, Route, Routes } from 'react-router-dom'
import { Explore } from './pages/Explore/Explore'
import { Profile } from './pages/Profile/Profile'
import { Home } from './pages/Home/Home'
import { ThemeProvider } from '@mui/material/styles'
import themes from './themes'
import { useState } from 'react'
import { Login } from './pages/Login/Login'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return (savedTheme as 'dark' | 'light') || 'light'
  })

  const isAuthenticated = !!localStorage.getItem('token')

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Routes>
          <Route path="/" element={<Navigate to={'/home'} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home toggleTheme={toggleTheme} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/explore"
            element={
              isAuthenticated ? (
                <Explore toggleTheme={toggleTheme} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile toggleTheme={toggleTheme} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
