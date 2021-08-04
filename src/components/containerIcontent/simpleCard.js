import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {FiShoppingCart} from "react-icons/all";

const SimpleCard = () => {
  return(
      <>
          <Card>
              <CardActionArea>
                  <CardMedia
                      image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      title='telephone'
                  />
                  <CardContent>
                      <Typography variant="h5">
                          Telephone
                      </Typography>
                      <Typography variant='body2'>
                          Lorem ipsunt velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus esse harum incidunt
                          iste maxime nemo non quidem sed voluptates. Aperiam fuga quaerat saepe! Eveniet facilis iusto
                          numquam possimus voluptatem..
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>
                    <FiShoppingCart/>
                </Button>
              </CardActions>
          </Card>
      </>
  )
}

export default SimpleCard;
















