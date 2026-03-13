import { CardContent, Container, Grid, Typography } from "@mui/material";
import { Menu } from "../../components/Menu";
import { TrendsCard } from "../../components/TrendsCard";


export function Explore() {
    return (
        <Container maxWidth="lg">
            <Grid container sx={{ height: '100vh', display: "flex", justifyContent: "center" }}>

                <Grid size={2} sx={{ paddingTop: "16px", paddingRight: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Menu />
                </Grid>

                <Grid size={6} sx={{ border: "1px solid #e3e3e3", height: "100vh", overflowY: "auto" }}>
                    
                    <div>
                        <Typography variant='body1' sx={{ fontWeight: "bold", padding: "12px", color: "rgb(51, 51, 51)" }}>Explorar</Typography>
                        <hr style={{ border: "1px solid  #e3e3e3" }} />
                    </div>

                    <div style={{padding: "12px"}}>

                        <CardContent sx={{ padding: "0 0", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)", fontWeight: "bold" }}>Esportes - há 45min</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assuntos sobre esportes</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Assuntos do momento no Brasil</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto do Momento</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Música - Assunto do Momento</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre música</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Cinema - Assunto do Momento</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre filmes e cinema</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Entretenimento - Assunto do Momento</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre Entretenimento</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Assunto do Momento em Porto Alegre</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto do Momento em Porto Alegre</Typography>
                        </CardContent>

                        <CardContent sx={{ padding: "0 0", mt: "8px", mb: "8px" }}>
                            <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>Daphne - Principal Assunto do Momento</Typography>
                            <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}>Assunto sobre a Daphne</Typography>
                        </CardContent>

                    </div>

                </Grid>

                <Grid size={3}>
                    <TrendsCard />
                </Grid>
            
            </Grid>

        </Container>
    )
}
