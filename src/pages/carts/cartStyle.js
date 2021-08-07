import React from 'react'
import {makeStyles} from "@material-ui/core";


export const useStyles =makeStyles((theme) => ({
    root:{
        display: 'flex',
        width: '50%',
        margin: 'auto',
        marginTop:theme.spacing(10)
    },
    moneyAlign:{
        alignSelf:'center',
        flexGrow:1
    }


}))















