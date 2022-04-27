import React from "react";
import {AppBar, Toolbar, Box, Typography} from "@material-ui/core";
import "./Navbar.css";

function Navbar(){
    return(
        <>
            <AppBar position = "static">
                <Toolbar variant = "dense">
                    <Box style = {{cursor : "pointer"}} >
                        <Typography variant = "h5" className="tituloNavbar">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box mx = {1} style = {{cursor : "pointer"}}  display = "flex" justifyContent = "start">
                        <Typography variant = "h6" className="tituloNavbar">
                            Home
                        </Typography>
                    </Box>

                    <Box mx = {1} style = {{cursor : "pointer"}} >
                        <Typography variant = "h6" className="tituloNavbar">
                            Postagens
                        </Typography>
                    </Box>

                    <Box mx = {1} style = {{cursor : "pointer"}} >
                        <Typography variant = "h6" className="tituloNavbar">
                            Temas
                        </Typography>
                    </Box>

                    <Box mx = {1} style = {{cursor : "pointer"}} >
                        <Typography variant = "h6" className="tituloNavbar">
                            Cadastrar Tema
                        </Typography>
                    </Box>

                    <Box mx = {1} style = {{cursor : "pointer"}} >
                        <Typography variant = "h6" className="tituloNavbar">
                            Logout
                        </Typography>
                    </Box>

                    

            
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;