import { Card, CardContent, Typography } from "@mui/material";
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"

export function TrendsCard() {
    return (
        <Card sx={{ mt: "24px", ml: "16px", padding: "8px 12px", backgroundColor: "#E9E9E9" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "rgb(51, 51, 51)" }}>O que está acontecendo?</Typography>

            <CardContent sx={{ padding: "8px 0" }}>
                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)", fontWeight: "bold" }}>Esportes - há 45min</Typography>
                <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assuntos sobre esportes</Typography>
            </CardContent>

            <CardContent sx={{ padding: "8px 0" }}>
                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Assuntos do momento no Brasil</Typography>
                <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto do Momento</Typography>
            </CardContent>

            <CardContent sx={{ padding: "8px 0" }}>
                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Música - Assunto do Momento</Typography>
                <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre música</Typography>
            </CardContent>

            <CardContent sx={{ padding: "8px 0" }}>
                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Cinema - Assunto do Momento</Typography>
                <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre filmes e cinema</Typography>
            </CardContent>

            <Link
                component={RouterLink}
                underline="none"
                to={"/explore"} 
                sx={{ fontSize: "10px", ":hover": { color: "rgb(23, 23, 181)" } }}>
                {'Mostrar mais'}
            </Link>
        </Card>
    )
}