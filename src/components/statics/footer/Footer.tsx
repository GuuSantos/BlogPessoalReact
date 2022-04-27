import React from "react";
import {Typography, Box, Grid} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";

function Footer(){
    return(
        <>
        <Grid container direction = "row" justifyContent="center" alignItems = "center">
            <Grid alignItems="center" item xs = {12}>
                <Box style = {{backgroundColor:"#1f15153d", height: "120px"}}>
                    <Box paddingTop={1} display = "flex" alignItems="center" justifyContent = "center">
                        <Typography variant = "h5" align = "center" gutterBottom style={{ color: "red"}}>Siga nas redes sociais</Typography>
                    </Box>

                    <Box display="flex" alignItems = "center" justifyContent = "center">
                        <a href="https://web.facebook.com/gustavo.sousasantos.56" target="_blank">
                           <FacebookIcon style = {{fontSize: 60, color: "red"}}/>
                        </a>

                        <a href="https://www.instagram.com/guuhss_/" target="_blank">
                           <InstagramIcon style = {{fontSize: 60, color: "red"}}/>
                        </a>

                        <a href="https://www.linkedin.com/in/gustavossantos41/" target="_blank">
                           <LinkedInIcon style = {{fontSize: 60, color: "red"}}/>
                        </a>

                    </Box>
                </Box>

                <Box style = {{backgroundColor: "#1f15153d", height: "60px"}}>
                    <Box paddingTop={1}>
                        <Typography variant = "subtitle2" align = "center" gutterBottom style = {{color: "red"}} className="textSize5" >© 2020 Copyright:</Typography>
                    </Box>

                    <Box>
                        <a href="https://brasil.generation.org" target="_blank" >
                            <Typography variant = "subtitle2" align = "center" gutterBottom style = {{color: "red"}} className="textSize5" >brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Footer;