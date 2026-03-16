import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const HeaderComponent = () => {
    return (
       /*  <div className='container'>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        Goto <a href = "https://www.imdb.com" className = "navbar-brand">
                            ImdbMovie Actual Website 
                        </a>
                    </div>

                </nav>
            </header>
        </div> */
        <div className='container'>
            <header>
        <AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we 
                    can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/*This is a simple Menu 
                      Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies 
                     default font weights and sizes */}

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Goto <a href = "https://www.imdb.com" className = "navbar-brand">
                            ImdbMovie Actual Website 
                        </a>
                </Typography>
                <Button color="inherit"></Button>
            </Toolbar>
        </AppBar>
        </header>
        </div>
    )
}

export default HeaderComponent
