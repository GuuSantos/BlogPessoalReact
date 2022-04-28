import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className = 'cursor' >
                        <Typography variant="h5" className="tituloNavbar">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box mx={1} className = 'cursor' display="flex" justifyContent="start">
                        <Typography variant="h6" className="tituloNavbar">
                            Home
                        </Typography>
                    </Box>

                    <Box mx={1} className = 'cursor' >
                        <Typography variant="h6" className="tituloNavbar">
                            Postagens
                        </Typography>
                    </Box>

                    <Box mx={1} className = 'cursor' >
                        <Typography variant="h6" className="tituloNavbar">
                            Temas
                        </Typography>
                    </Box>

                    <Box mx={1} className = 'cursor' >
                        <Typography variant="h6" className="tituloNavbar">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                    <Link to = '/login' className = 'text-decorator-none'>
                        <Box mx={1} className = 'cursor' >
                            <Typography variant="h6" className="tituloNavbar">
                                Logout
                            </Typography>
                        </Box>
                    </Link>





                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;