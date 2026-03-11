import { Box, Button, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './HomePage.css';

export function HomePage() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container sx={{ height: '100vh', display: "flex", justifyContent: "center" }}>
                    <Grid
                        size={2}
                        sx={{
                            paddingTop: '16px',
                            paddingRight: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img
                                    src="https://deploy-growtwitter.vercel.app/assets/logo_growtweet-222727c3.svg"
                                    alt="Logo Growtwitter"
                                    className="logo"
                                />

                                <a className="a-menu">
                                    <img
                                        src="https://deploy-growtwitter.vercel.app/assets/icone_pagina%20inicial_selecionado-ebd33e8b.svg"
                                        className="icon-menu"
                                    />
                                    <span className="title-menu">Página Inicial</span>
                                </a>

                                <a className="a-menu">
                                    <img
                                        src="https://deploy-growtwitter.vercel.app/assets/icone_explorar-d8e2a80e.svg"
                                        className="icon-menu"
                                    />
                                    <span className="title-menu">Explorar</span>
                                </a>

                                <a className="a-menu">
                                    <img
                                        src="https://deploy-growtwitter.vercel.app/assets/icone_perfil-39ec16d6.svg"
                                        className="icon-menu"
                                    />
                                    <span className="title-menu">Perfil</span>
                                </a>

                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: '16px',
                                        textTransform: 'none',
                                        mt: '12px',
                                        cursor: "pointer"
                                    }}
                                >
                                    Tweetar
                                </Button>
                            </Box>
                        </div>

                        <div>
                            <div className="card-info">
                                <img
                                    className='img-logo'
                                    src="https://i.postimg.cc/FF8XWg5L/logo-growdev-Ut-Js-S5.png"
                                />
                                <div className="infos-login">
                                    <Typography
                                        sx={{
                                            color: 'rgb(51, 51, 51)',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Growdev
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'rgb(51, 51, 51)', fontSize: '12px' }}
                                    >
                                        @growdev
                                    </Typography>
                                </div>
                            </div>
                            <Button
                                variant="outlined"
                                sx={{ ml: '8px', mt: '12px', mb: '24px' }}
                            >
                                Sair
                            </Button>
                        </div>
                    </Grid>

                    <Grid size={6} sx={{ border: "1px solid #e3e3e3", height: "100vh", overflowY: "auto" }}>

                        <div>
                            <Typography variant='body1' sx={{ fontWeight: "bold", padding: "12px", color: "rgb(51, 51, 51)" }}>Página Inicial</Typography>
                            <hr style={{ border: "1px solid  #e3e3e3" }} />
                        </div>


                        <div style={{ display: "flex", flexDirection: "row", padding: "12px" }}>
                            <div>
                                <img src="https://i.postimg.cc/FF8XWg5L/logo-growdev-Ut-Js-S5.png" alt="Imagem usuário" className='img-logo' />
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
                                                src="https://deploy-growtwitter.vercel.app/assets/icone_responder-51a8f819.svg"
                                                alt="Comentar"
                                            />
                                            0
                                        </span>

                                        <span style={{ fontSize: "12px", display: "flex", alignItems: "center", marginRight: "24px" }}>
                                            <img style={{ width: "12px", marginRight: "4px" }}
                                                src="https://deploy-growtwitter.vercel.app/assets/icone_curtir-407e1295.svg"
                                                alt="Comentar"
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

                    </Grid>

                    <Grid size={3}>
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

                            <Link href="#" underline="none" sx={{ fontSize: "10px" }} className='btn-card'>
                                {'Mostrar mais'}
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
