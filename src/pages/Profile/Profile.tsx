import { Container, Grid, Typography } from "@mui/material";
import { Menu } from "../../components/Menu";
import { TrendsCard } from "../../components/TrendsCard";
import icon_back from "../../assets/images/icon_back.svg";
import { Link } from "react-router-dom";

export function Profile() {

    return (
        <Container maxWidth="lg">

            <Grid container sx={{ height: '100vh', display: "flex", justifyContent: "center" }}>

                <Grid size={2} sx={{ paddingTop: "16px", paddingRight: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Menu />
                </Grid>

                <Grid size={6} sx={{ border: "1px solid #e3e3e3", height: "100vh", overflowY: "auto" }}>

                    <div style={{ display: "flex", margin: "16px 0 8px 8px" }}>

                        <div style={{ display: "flex" }}>
                            <Link to={"/Home"} style={{ display: "flex" }}>
                                <img src={icon_back} alt="Voltar" style={{ width: "12px", marginRight: "24px" }} />
                            </Link>
                        </div>

                        <div>
                            <div>
                                <Typography variant='body1' sx={{ fontWeight: "bold", color: "rgb(51, 51, 51)", fontSize: "14px" }}>Perfil de @growdev</Typography>
                            </div>

                            <div>
                                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>5 Tweets</Typography>
                            </div>
                        </div>

                    </div>

                    <hr style={{ border: "1px solid  #e3e3e3" }} />
                </Grid>

                <Grid size={3}>
                    <TrendsCard />
                </Grid>

            </Grid>

        </Container>
    )
}