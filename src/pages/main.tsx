import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Inventory } from "../components/inventory"
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from "@mui/icons-material";

export const Main = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr:2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Whiskey Inventory
                    </Typography>
                    <div>
                    <IconButton 
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Box style={{marginTop: "64px"}}>
                <Inventory />
            </Box>
        </>
    )
}