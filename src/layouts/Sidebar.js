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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

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
    { text: 'Stepper', path: '/demo/stepper' },
];

export default function Sidebar({ children }) {
    const { isAuthenticated, token, error, username } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };
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
                    <Toolbar className='d-flex flex-column bg-secondary-subtle'>
                        {username && (
                            <h3 className='mt-1'>Hello, {username}</h3>
                        )}
                        {isAuthenticated && (
                            <button className='btn text-secondary' onClick={logoutHandler}>
                                Logout
                            </button>
                        )}
                    </Toolbar>
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
