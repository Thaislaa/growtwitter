import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import './global.css'
import { theme } from './theme.ts'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento root não encontrado");
}

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);