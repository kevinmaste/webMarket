import React from "react";
import {Avatar, Grid, Typography} from "@material-ui/core";
import {Animated} from "react-animated-css";


const BodyContent = () => {
  return(
      <div style={{padding:50}}>
          <Grid container spacing={2}>
              <Grid container item xs={12}  >
                  <Animated animationIn="fadeInLeft" isVisible={true}>
                      <Typography variant="inherit" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores deleniti eius error
                          eveniet fugit harum hic
                          incidunt ipsam iusto labore maxime, non numquam quae quia, reiciendis sed velit voluptatum.
                      </Typography>
                  </Animated>
                  {/*A grandir l'avatar */}
                  <Animated animationIn="zoomInDown" animationInDuration={2000} isVisible={true}>
                      <Avatar alt="gerant" src="https://media-exp1.licdn.com/dms/image/C4E03AQGawtHhhh2DcQ/profile-displayphoto-shrink_400_400/0/1614114171796?e=1633564800&v=beta&t=Bg-H-Gm9DRuxfKp9EmPzF7VixzZQQfU0Y1_KZL7BdfY"/>
                  </Animated>
                  <Animated animationIn="rotateIn" animationInDuration={4000} isVisible={true}>
                      <video controls>
                          <source src='../../asset/videoplayback.mp4' type="video/mp4"/>
                      </video>
                </Animated>
              </Grid>
          </Grid>
      </div>
  )
}

export default BodyContent;































