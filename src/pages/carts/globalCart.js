import React from 'react'
import Cart from "./cart";
import {cartSelector} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import {Typography,Grid} from "@material-ui/core";

const GlobalCart = () => {
    const carts =useSelector(cartSelector);
    return (
            <div>
                {!carts.length ? (<Typography variant="h3" color="error" align="center">Rien dans la cart</Typography>)
                    :(
                        <>
                            {carts.map((item,i)=>(
                                <Grid item sm={6} lg={2} md={4} key={i}>
                                    <Cart cartId={item} id={i}/>
                                </Grid>
                            ))
                            }
                        </>
                    )
                }
            </div>
        )
};

export default GlobalCart;





















