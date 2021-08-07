import React from 'react';
import {CardActions, CardContent, CardMedia, Button, Card} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {useStyles} from "./cartStyle";

const Cart = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                style={{width:100,height:100}}
                image="https://material-ui.com/static/images/cards/live-from-space.jpg"
            />
            <CardContent className={classes.moneyAlign}>
                <Typography variant="h6">1000 $</Typography>
            </CardContent>
            <CardActions>
                <Button>
                    delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Cart;