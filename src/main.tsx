import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { theme } from './themes/theme.ts'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento root não encontrado')
}

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
