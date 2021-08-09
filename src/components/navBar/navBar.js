import React from "react";
import AppBar from '@material-ui/core/AppBar';
import {Avatar, Badge, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {auth,provider} from "../../firebase";
import {signOut,setActiveAccount} from "../../features/user/userSlice";
import {currentSelector,usernameSelector,pictureSelector} from "../../features/user/userSlice";
import {cartSelector} from "../../features/user/userSlice";
import {useDispatch,useSelector} from "react-redux";
import {useStyles} from "./navStyles";
import firebase from "firebase";
import {Link} from "react-router-dom";

const NavBar=()=>{
    //We can set the auth with firebase after
    const dispatch = useDispatch();
    const username = useSelector(usernameSelector)
    const picture = useSelector(pictureSelector)
    const current = useSelector(currentSelector)
    //i use it because of the badge
    const cartLenght = useSelector(cartSelector)
    const  handleLogin=()=> {
        auth.signInWithPopup(provider)
            .then((response) =>{
                dispatch(setActiveAccount({
                    username: response.user.displayName,
                    email: response.user.email,
                    picture: response.user.photoURL
                }))
            })
    }
    const handleLogout=()=> {
        auth.signOut()
            .then(()=>dispatch(
                signOut()
            )).catch((error) =>console.log(error.message))
    }


    const classes =useStyles();
    return(
        <>
            <AppBar className={classes.appColor}>
                <Toolbar>
                    <Typography variant="inherit" color="primary" className={classes.logoText}>
                        CedCommerce
                    </Typography>
                    {/* test for display the bouton when you are connecting*/}
                    {current ? (
                            <div className={classes.root}>
                                <Link to='/cart'>
                                    <IconButton>
                                        <Badge badgeContent={cartLenght.length} color='secondary'>
                                            <ShoppingCartOutlinedIcon/>
                                        </Badge>
                                    </IconButton>
                                </Link>
                                <Button color="inherit" className={classes.colorT} onClick={handleLogout}>
                                    Logout
                                </Button>
                                <Avatar alt={username} src={picture} className={classes.avatarSize}>
                                    {!picture && username.slice(0,3)}
                                </Avatar>

                            </div>
                        ): (
                            <Button color="inherit" onClick={handleLogin}>
                                Login
                            </Button>
                        )
                    }

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;









































