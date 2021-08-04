import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import {Badge, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const NavBar=()=>{
    //We can set the auth with firebase after
    const [Up,setUp]= useState(false)
    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="inherit">
                        CedCommerce
                    </Typography>
                    {/* test for display the bouton when you are connecting*/}
                    {!Up &&
                    <Button color="inherit">
                        Login
                    </Button>
                    }
                    {Up &&
                        <div>
                            <IconButton>
                                <Badge badgeContent={1} color='secondary'>
                                    <ShoppingCartOutlinedIcon/>
                                </Badge>
                            </IconButton>
                            <Button color="inherit">
                                Logout
                            </Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;









































