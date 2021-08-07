import React from "react";
import Loader from 'react-loader-spinner'
import {useStyles} from "./loadingStyle";

function Loading(){
    const classes=useStyles()
    return <div className={classes.loading}><Loader type="Circles" color="#00BFFF" height={80} width={80}/></div>

}

export default Loading











