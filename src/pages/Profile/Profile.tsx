import { Container, Grid, Typography } from "@mui/material";
import { Menu } from "../../components/Menu";
import { TrendsCard } from "../../components/TrendsCard";
import icon_back from "../../assets/images/icon_back.svg";
import { Link } from "react-router-dom";
import logo_growdev from '../../assets/images/logo-growdev.png'
import icon_reply from "../../assets/images/icon_reply.svg"
import icon_like from "../../assets/images/icon_like.svg";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Hr } from "../../components/Hr";

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
                                <Typography sx={{ fontSize: "10px", color: " rgb(130, 130, 130)" }}>1 Tweet</Typography>
                            </div>
                        </div>

                    </div>

                    <Hr />

                    <div style={{ paddingBottom: "45px" }}>
                        <div style={{ backgroundColor: "#1976d2", height: "132px", position: "relative" }}>
                            <img src={logo_growdev} alt="Logo Growdev" style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                                position: "absolute",
                                top: "100%",
                                left: "55px",
                                transform: "translate(-50%, -50%)",
                                border: "1px solid #f6f4f4"
                            }} />
                        </div>
                    </div>

                    <div style={{ margin: "12px" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "rgb(51, 51, 51)" }}>Growdev</Typography>
                        <Typography sx={{ color: "rgb(51, 51, 51)" }}>@growdev</Typography>
                    </div>

                    <Hr />

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
    )
}