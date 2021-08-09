import React, {useEffect} from 'react';
import {CardActions, CardContent, CardMedia, Button, Card} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {useStyles} from "./cartStyle";
import {useDispatch,useSelector} from "react-redux";
import {getCartByUser, cartItemsSelector, productsSelector} from "../../features/product/productSlice";
import Loading from "../../components/loading/loading";

const Cart = ({id,cartId}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {loading,cartItems}=useSelector(cartItemsSelector)

    useEffect(()=>{
        dispatch(getCartByUser(cartId))
    },[dispatch])
    return (
        <>
            {loading ? <Loading />:(
                <Card className={classes.root}>
                    <CardMedia
                        style={{width:100,height:100}}
                        image={cartItems.image}
                    />
                    <CardContent className={classes.moneyAlign}>
                        <Typography variant="h6">{cartItems.price}$</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large">
                            delete
                        </Button>
                    </CardActions>
                </Card>
            )}
        </>

    );
};

export default Cart;