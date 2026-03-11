import { Box, Button, Typography } from "@mui/material"

export function Menu() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src="https://deploy-growtwitter.vercel.app/assets/logo_growtweet-222727c3.svg"
                    alt="Logo Growtwitter"
                    style={{ width: "100px", paddingLeft: "8px", marginBottom: "12px" }}
                />

                <a style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)" }}>
                    <img
                        src="https://deploy-growtwitter.vercel.app/assets/icone_pagina%20inicial_selecionado-ebd33e8b.svg"
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Página Inicial</span>
                </a>

                <a style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)" }}>
                    <img
                        src="https://deploy-growtwitter.vercel.app/assets/icone_explorar-d8e2a80e.svg"
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Explorar</span>
                </a>

                <a style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)" }}>
                    <img
                        src="https://deploy-growtwitter.vercel.app/assets/icone_perfil-39ec16d6.svg"
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Perfil</span>
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

            <div>
                <div style={{ display: "flex" }}>
                    <img
                        style={{ width: "40px", marginRight: "8px" }}
                        src="https://i.postimg.cc/FF8XWg5L/logo-growdev-Ut-Js-S5.png"
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
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
        </>
    )
}