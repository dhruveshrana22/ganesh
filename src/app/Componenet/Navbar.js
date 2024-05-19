import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const navigation = useNavigate();
    const handleMenuClick = () => {
        // Open the drawer when menu icon is clicked
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        // Close the drawer
        setDrawerOpen(false);
    };

    const navigateToScreen = (screen) => {
        // Navigate to the specified screen (You can implement this part based on your routing library)
        console.log('Navigate to', screen);
        // Close the drawer after navigating
        navigation(screen)
        setDrawerOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenuClick} // Call handleMenuClick on icon click
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome To Ganesh Kirana Online Store
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <List>
                    {[
                        { text: 'Home', route: '/' },
                        { text: 'Add Products', route: '/AddProducts' },
                        { text: 'About Us', route: '/about' },
                        // Add more items as needed
                    ].map((item, index) => (
                        <ListItem button key={index} onClick={() => navigateToScreen(item.route)}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
