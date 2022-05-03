import React, {useState, useEffect, ChangeEvent} from 'react';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';


function Login(){
    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })

    function updatedModel(e:ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }   

    useEffect(() =>{
        if(token !== ""){
            history('/home')
        }
    },[token])

    async function logar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert("Usuário logado com sucesso")

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

   return(
       <Grid container direction = 'row' justifyContent = 'center' alignItems = 'center'>
           <Grid xs = {6} alignItems = 'center'>
               <Box paddingX={20}>
                   <form onSubmit={logar}>
                        <Typography variant = 'h3' gutterBottom color = 'textPrimary' component = 'h3' align = 'center' className = 'textos1'>Entrar</Typography>
                        <TextField value ={userLogin.usuario} onChange = {(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label = 'Usuário' variant = 'outlined' name = 'usuario' margin = 'normal' fullWidth />
                        <TextField  value ={userLogin.senha} onChange = {(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label = 'Senha' variant = 'outlined' name = 'senha' margin = 'normal' type = 'password' fullWidth />
                        <Box marginTop={2} textAlign = 'center'>
                            <Button type = 'submit' variant = 'contained'className = 'textos1'>
                                Logar
                            </Button>
                        </Box>
                   </form>
                   <Box display='flex' justifyContent = 'center' marginTop = {2}>
                       <Box marginRight = {1}>
                           <Typography variant = 'subtitle1' gutterBottom align = 'center' >Não tem uma conta?</Typography>
                       </Box>
                       <Link to = '/cadastrousuario' className = 'text-decorator-none'>
                       <Typography variant = 'subtitle1' gutterBottom align = 'center' className = 'textos1'>Cadastre-se</Typography>
                       </Link>
                   </Box>
               </Box>
           </Grid>
           <Grid xs = {6} className = 'imagem'>

           </Grid>
       </Grid>
   )
}

export default Login;
