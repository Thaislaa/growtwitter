import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './HomePage.css';

export function HomePage() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container sx={{ height: '100vh' }}>
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
                                    style={{ width: '40px', marginRight: '8px' }}
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

                    <Grid size={6} sx={{ backgroundColor: 'pink' }}>
                        Posts
                    </Grid>

                    <Grid size={3} sx={{ backgroundColor: 'orange' }}>
                        O que está acontecendo?
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
