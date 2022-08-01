import React, { useState } from 'react'

import { Box, AppBar, Toolbar, Container, Grid, Typography, Stack, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Drawer } from './Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import Logo  from '../assets/img/logo.png'

export const NavBar = () => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = ( _open : boolean) => {
        setOpen(_open)
    }

    const navigation = useNavigate();

    const goHome = () => {
        navigation('/');
    }

    return (
        <>
        <Box sx={{flexGrow: 1}}>
            <Drawer open={open} toggleDrawer={toggleDrawer} navigate={navigation} />
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid 
                            container 
                            direction= 'row' 
                            justifyContent='space-between' 
                            alignItems='center'
                        >

                            <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
                                <IconButton size="small" onClick={() => toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Grid>    

                            <Grid item xs={10} sm={11} md={11} lg={11} xl={11} sx={{display: 'flex', justifyContent: 'center'}}>
                                <Stack 
                                    direction='row' 
                                    spacing={1} 
                                    onClick={goHome} 
                                    sx={{alignItems: 'center', cursor: 'pointer'}} 
                                >
                                    <Box sx={{}}>
                                        <img 
                                            src={Logo}
                                            alt='logo-nav'
                                            style={{
                                                height: '50px'
                                            }}
                                        />
                                    </Box>
                                    <Typography 
                                        sx={{ display:{ xs: 'none', md: 'flex'} }}
                                        variant='h6'
                                    >
                                        Liderando
                                    </Typography>

                                </Stack>
                            </Grid>
                            {/* <Grid>
                                <Button>Home</Button>
                            </Grid> */}
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
        <Box height={70}></Box>
        </>
    )
}
