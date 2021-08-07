import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {FiShoppingCart} from "react-icons/all";
import {useStyles} from "./contentIStyle";
import {useDispatch, useSelector} from "react-redux";
import {setUserCart,cartSelector} from "../../features/user/userSlice";

const SimpleCard = ({id,products}) => {
    const dispatch = useDispatch()
    const carts =useSelector(cartSelector)
    console.log(carts[0])
    const  arr = []
    const classes = useStyles();
    const sendToCart=()=> {
        arr.push(id)
       dispatch(setUserCart({
           carts:[...carts,arr]
       }))
    }
    return(
      <>
          <Card>
              <CardActionArea>
                  {/* we must to change with the real style te height of cardMedia */}
                  <CardMedia
                      style={{height:140}}
                      image={products.image}
                      title={products.title}
                      className={classes.imagecomplete}
                  />
                  <CardContent>
                      <Typography variant="h5" noWrap>
                          {products.title}
                      </Typography>
                      <Typography variant='body2' noWrap>
                          {products.description}
                      </Typography>
                      <Typography variant='h6' components='p'>
                          {products.price}$
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size={"large"} key={id} onClick={sendToCart} >
                    <FiShoppingCart/>
                </Button>
              </CardActions>
          </Card>
      </>
  )
}

export default SimpleCard;
















