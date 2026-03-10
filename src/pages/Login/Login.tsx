import { Button, Card, CardContent, InputLabel, TextField, Typography, Box } from "@mui/material";
import "./Login.css";

export function Login() {
    return (

        <Card
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                minWidth: "100vw",
                backgroundColor: "#F2F2F2",
                p: 2
            }}
        >

            <div className="div-message">
                <Box className="box"
                    sx={{
                        flex: 1.5,
                        backgroundColor: "#1D9BF0",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 2
                    }}
                >
                    <Typography variant="h4" fontWeight="bold">
                        Growtwitter
                    </Typography>

                    <Typography variant="caption" sx={{ mt: 1.5, mb: 1.5 }}>
                        Trabalho final do bloco intermediário
                    </Typography>

                    <Typography sx={{ lineHeight: 1.2 }}>
                        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes
                        sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter,
                        mas com um toque único. Seja parte desta comunidade que valoriza a liberdade
                        de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
                    </Typography>
                </Box>

                <CardContent className="card-form"
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 650,
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >

                    <div className="div-form">
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center",
                                mb: 2
                            }}
                        >
                            Entrar no Growtwitter
                        </Typography>


                        <form action="#">
                            <InputLabel sx={{ fontSize: 14, mb: 0.5 }}>
                                Username
                            </InputLabel>
                            <TextField size="small" sx={{ mb: 1 }} />

                            <InputLabel sx={{ fontSize: 14, mb: 0.5 }}>
                                Password
                            </InputLabel>
                            <TextField size="small" sx={{ mb: 1 }} />

                            <Button variant="contained" sx={{ mt: 1, backgroundColor: "#1D9BF0" }}>
                                Entrar
                            </Button>
                        </form>
                    </div>

                </CardContent>
            </div>
        </Card>
    );
}