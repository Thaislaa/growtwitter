import { Box, Button, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import icon_home from "../assets/images/icon_home.svg"
import icon_home_active from "../assets/images/icon_home_active.svg"
import icon_explore from "../assets/images/icon_explore.svg"
import icon_explore_active from "../assets/images/icon_explore_active.svg"
import icon_profile from "../assets/images/icon_profile.svg"
import icon_profile_active from "../assets/images/icon_profile_active.svg"

export function Menu() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src="https://deploy-growtwitter.vercel.app/assets/logo_growtweet-222727c3.svg"
                    alt="Logo Growtwitter"
                    style={{ width: "100px", paddingLeft: "8px", marginBottom: "12px" }}
                />

                <Link to="/home" style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)", textDecoration: "none" }}>
                    <img
                        src={isActive("/home") ? icon_home_active : icon_home}
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Página Inicial</span>
                </Link>

                <Link to={"/explore"} style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)", textDecoration: "none" }}>
                    <img
                        src={isActive("/explore") ? icon_explore_active : icon_explore}
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Explorar</span>
                </Link>

                <Link to={"/profile"} style={{ display: "flex", alignItems: "center", color: "rgb(51, 51, 51)", textDecoration: "none" }}>
                    <img
                        src={isActive("/profile") ? icon_profile_active : icon_profile}
                        style={{ padding: "8px" }}
                    />
                    <span style={{ fontSize: "16px" }}>Perfil</span>
                </Link>

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