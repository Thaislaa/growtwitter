import { Container, Grid, Typography } from "@mui/material";
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
                </Grid>


                <Grid size={3}>
                    <TrendsCard />
                </Grid>
            </Grid>


        </Container>
    )
}
