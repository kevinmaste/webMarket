import React from 'react'
import {makeStyles} from "@material-ui/core";

export const useStyles =makeStyles((theme) => (
    {
        root:{
            marginTop:theme.spacing(10.5),
            marginRight:theme.spacing(0.5)
        },
        avatarCenter:{
            margin:"auto",
            width:theme.spacing(11),
            height:theme.spacing(11)
        },
        gridCenter:{
            flexDirection:"column",
        },
        someMargin:{
            marginTop:theme.spacing(5)
        },
        videoposition:{
            marginTop:theme.spacing(5),
            textAlign:"center",
            '& > video':{
                width:'550px',
                [theme.breakpoints.down('sm')]:{
                    width:'300px',
                },
            }
        }


    }
    )
)