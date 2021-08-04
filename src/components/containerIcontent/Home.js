import React from "react";
import {Grid} from "@material-ui/core";
import SimpleCard from "./simpleCard";

const Home = () => {
  return(
      <div style={{padding:50}}>
        <Grid container spacing={4}>
            <Grid item xs={12} >
                <Grid container>
                    <Grid item sm={6} spacing={4}  >
                        {[0,1,2,3].map(()=>(
                            <SimpleCard/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  )
}

export default Home;































