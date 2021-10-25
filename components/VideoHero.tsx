import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  videoWrapper: {
    height: "90vh",
  },
  
}));

const VideoHero = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.videoWrapper}>
            <iframe src="https://www.youtube.com/embed/d0n0scNuRxI" height="100%" width="100%" frameBorder="0"></iframe>
        </div>
    )
}

export default VideoHero
