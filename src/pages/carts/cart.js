import React, {useEffect} from 'react';
import {CardActions, CardContent, CardMedia, Button, Card} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {useStyles} from "./cartStyle";
import {useDispatch, useSelector} from "react-redux";
import {getCartByUser, productsSelector} from "../../features/product/productSlice";
import Loading from "../../components/loading/loading";

const Cart = ({id,cartId}) => {
    console.log("id:",id,"cartId:",cartId);
    const classes = useStyles();
    const dispatch = useDispatch()
    const {loading,product} = useSelector(productsSelector)
    console.log("cart loading:",loading)

    useEffect(()=>{
        dispatch(getCartByUser(Number(cartId)+1))
        console.log('component didMount')
    },[dispatch])
    return (
        <>
            {loading ? <Loading/> :(
                <>
                    <Card className={classes.root}>
                        <CardMedia
                            style={{width:100,height:100}}
                            image={product.image}
                        />
                        <CardContent className={classes.moneyAlign}>
                            <Typography variant="h6">{product.price}$</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" key={id}>
                                delete
                            </Button>
                        </CardActions>
                    </Card>
                </>
                )
            }
        </>

    );
};

export default Cart;