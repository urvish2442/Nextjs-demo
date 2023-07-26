import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const drawerWidth = 240;
const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'On Keyup', path: '/demo/keyup' },
    { text: 'Toggle Button', path: '/demo/toggle' },
    { text: 'Price Quantity', path: '/demo/pricequantity' },
    { text: 'Converter', path: '/demo/converter' },
    { text: 'Counter', path: '/demo/counter' },
    { text: 'Clone', path: '/demo/clone' },
    { text: 'MovieDb', path: '/demo/moviedb' },
    { text: 'Context', path: '/demo/contextdemo' },
    { text: 'Redux ToolKit', path: '/demo/reduxtoolkit' },
];

export default function Sidebar({ children }) {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant='permanent'
                    anchor='left'
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {navLinks.map((linkObject, index) => (
                            <ListItem key={linkObject.text} disablePadding>
                                <ListItemButton component={Link} href={linkObject.path}>
                                    <ArrowRightRoundedIcon />
                                    <ListItemText primary={linkObject.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component='main' className='' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    {/* <Toolbar /> */}
                    {children}
                </Box>
            </Box>
        </>
    );
}
