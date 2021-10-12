import React from 'react';
import { createStyles, makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            width: 50,
            height: 50,
            borderRadius: "50%",
            overflow: "hidden",

        },
        avatarImg: {
            display:"block",
            width: "100%"
        },
    });
});

const Avatar = ({src}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={src} className={classes.avatarImg} alt='myImage'/>
        </div>
    )
}

export default Avatar ;