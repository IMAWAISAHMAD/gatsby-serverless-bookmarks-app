import React from 'react';
import {AppBar,Toolbar,Typography} from "@material-ui/core";  

const Header = () => {
    return(
        <>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    BookMark App
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default Header;