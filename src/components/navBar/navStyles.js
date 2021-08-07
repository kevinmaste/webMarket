import React from 'react'
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) =>(
    {
        root:{
            display: "flex",
            '& > *':{
                margin:theme.spacing(0.1),
            },

        },
        appColor:{
          backgroundColor:'background-color: #D9AFD9;\n' +
              'background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);\n',
        },
        avatarSize:{
            width:theme.spacing(4),
            height:theme.spacing(4),
            alignSelf:'center',
        },
        logoText:{
            flexGrow:1,
            color:'#6082B6'
        },
        colorT:{
            color:'#6082B6',
        }

    }
))