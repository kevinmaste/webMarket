import React from 'react'
import Cart from "./cart";
import {cartSelector} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import {Typography,Grid,Button} from "@material-ui/core";
import {Link} from "react-router-dom"
import {cartItemsSelector, loadingSelector} from "../../features/product/productSlice";

const GlobalCart = () => {
    const carts =useSelector(cartSelector);
    return (
            <div>
                <Link to="/">
                    <Button color="primary" size="large">Back</Button>
                </Link>
                {!carts.length ? (<Typography variant="h2" color="error" align="center">Rien dans la cart</Typography>)
                    :(
                        <Grid container spacing={2} direction="column">
                            {carts.map((item,i)=>(
                                <Grid item xs key={i}>
                                    <Cart cartId={item} id={i}/>
                                </Grid>
                            ))
                            }
                        </Grid>
                    )
                }
            </div>
        )
};

export default GlobalCart;





















