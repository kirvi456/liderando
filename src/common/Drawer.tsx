import React from 'react'

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { NavigateFunction } from 'react-router-dom';


import ListItemIcon from '@mui/material/ListItemIcon';
import CalculateIcon from '@mui/icons-material/Calculate';
import HomeIcon from '@mui/icons-material/Home';


type DrawerProps = {
    open: boolean;
    toggleDrawer : (_open: boolean) => void,
    navigate: NavigateFunction
}

interface NavItem {
    text: string,
    url: string,
    icon: JSX.Element
}

const navList : NavItem[] = [
    {
        text: 'Home',
        url: '/',
        icon: (<HomeIcon />)
    },
    {
        text: 'Calculadora',
        url: '/calculadora',
        icon: (<CalculateIcon />)
    }
]

export const Drawer : React.FC<DrawerProps> = ({ open, toggleDrawer, navigate }) => {    

    
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={ () => toggleDrawer(false) }
            onKeyDown={ () => toggleDrawer(false) }
        >
            <List>
                { navList.map((item, index) => (
                    <ListItem 
                        key={item.text} 
                        disablePadding
                        onClick={ () => {navigate(item.url)} }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                { item.icon }
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
        );

        return (
            <div>
                <SwipeableDrawer
                    anchor='left'
                    open={ open }
                    onClose={() => toggleDrawer( false )}
                    onOpen={() => toggleDrawer( true )}
                >
                { list() }
                </SwipeableDrawer>
            </div>
        );
}
