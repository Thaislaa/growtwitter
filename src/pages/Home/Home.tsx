import { Container, Grid, Typography } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './Home.css';
import { Menu } from '../../components/Menu';
import { TrendsCard } from '../../components/TrendsCard';
import logo_growdev from "../../assets/images/logo-growdev.png";
import icon_reply from "../../assets/images/icon_reply.svg"
import icon_like from "../../assets/images/icon_like.svg";
import { Hr } from '../../components/Hr';


export function Home() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container sx={{ height: '100vh', display: "flex", justifyContent: "center" }}>

                    <Grid size={2} sx={{ paddingTop: "16px", paddingRight: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Menu />
                    </Grid>

                    <Grid size={6} sx={{ border: "1px solid #e3e3e3", height: "100vh", overflowY: "auto" }}>

                        <div>
                            <Typography variant='body1' sx={{ fontWeight: "bold", padding: "12px", color: "rgb(51, 51, 51)" }}>Página Inicial</Typography>
                            <Hr />
                        </div>


                        <div style={{ display: "flex", flexDirection: "row", padding: "12px" }}>
                            <div>
                                <img src={logo_growdev} alt="Imagem usuário" className='img-logo' />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Typography
                                        sx={{
                                            color: 'rgb(51, 51, 51)',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            mr: "8px"
                                        }}
                                    >
                                        Growdev
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'rgb(51, 51, 51)', fontSize: '12px' }}
                                    >
                                        growdev • 3h
                                    </Typography>
                                </div>

                                <div>
                                    <Typography variant='caption' sx={{ color: "rgb(51, 51, 51)" }}>Mensagem</Typography>
                                </div>

                                <div>
                                    <div style={{ display: "flex", marginTop: "8px", marginRight: "12px", flexDirection: "row" }}>
                                        <span style={{ fontSize: "12px", display: "flex", alignItems: "center", marginRight: "24px" }}>
                                            <img style={{ width: "12px", marginRight: "4px" }}
                                                src={icon_reply}
                                                alt="Comentar"
                                            />
                                            0
                                        </span>

                                        <span style={{ fontSize: "12px", display: "flex", alignItems: "center", marginRight: "24px" }}>
                                            <img style={{ width: "12px", marginRight: "4px" }}
                                                src={icon_like}
                                                alt="Curtir"
                                            />
                                            0
                                        </span>

                                        <span style={{ fontSize: "12px", display: "flex", alignItems: "center", marginRight: "24px" }}>
                                            <DeleteOutlineRoundedIcon style={{ width: "14px", marginRight: "4px", color: "#828282" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Hr />
                    </Grid>

                    <Grid size={3}>
                        <TrendsCard />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}
