import React from "react";
import {Avatar, Grid, Typography} from "@material-ui/core";
import {Animated} from "react-animated-css";
import {useStyles} from "./contentOStyle";

const BodyContent = () => {
    const classes = useStyles();
  return(
      <div className={classes.root}>
          <Grid container spacing={2} >
              <Grid container item xs={12} >
                  <Animated animationIn="fadeInLeft" isVisible={true}>
                      <Typography variant="inherit" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores deleniti eius error
                          eveniet fugit harum hic
                          incidunt ipsam iusto labore maxime, non
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Corporis culpa cupiditate doloremque, est fugiat illo impedit iure magni optio porro possimus, qui repellat
                      </Typography>
                  </Animated>
                  {/*A grandir l'avatar */}
                  <Grid container item className={classes.gridCenter}>
                      <Animated animationIn="zoomInDown" animationInDuration={2000} isVisible={true}>
                          <Grid item xs={12} className={classes.someMargin}>
                              <Avatar
                                  alt="gerant" src="https://media-exp1.licdn.com/dms/image/C4E03AQGawtHhhh2DcQ/profile-displayphoto-shrink_400_400/0/1614114171796?e=1633564800&v=beta&t=Bg-H-Gm9DRuxfKp9EmPzF7VixzZQQfU0Y1_KZL7BdfY"
                                  className={classes.avatarCenter}
                              />
                              <Typography variant='h5' align="center">
                                  Cedric Biloué Le perron
                              </Typography>
                              <Typography variant='body2' align="center">
                                    Site E-commerce
                              </Typography>
                              <Typography variant='body1' align="center">
                                  Connectez vous et visité
                              </Typography>
                          </Grid>
                      </Animated>
                      <Animated animationIn="fadeIn" animationInDuration={4000} isVisible={true}>
                          <Grid item xs={12}>
                              <div className={classes.videoposition}>
                                  <video controls>
                                      <source src='../../asset/videoplayback.mp4' type="video/mp4"/>
                                  </video>
                              </div>
                          </Grid>
                    </Animated>
                  </Grid>
              </Grid>
          </Grid>
      </div>
  )
}

export default BodyContent;































