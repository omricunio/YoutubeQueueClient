import React, { Component } from 'react'
import styles from './styles';
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { PlayArrow, Pause } from '@material-ui/icons';
import StyledImage from '../StyledImage/StyledImage';
import ReactPlayer from 'react-player';
import ProgressBar from '../ProgressBar/ProgressBar';

class MiniPlayer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { classes, progress, buffer, currentItem, playingState, onProgressChange, onBufferChange, onPlayingStateChange } = this.props;
        this.player && Math.abs((this.player.getCurrentTime()/this.player.getDuration()) - (progress/100)) > 0.001 && this.player.seekTo(progress/100);
        return (
            <AppBar className={classes.bottomBar} color="secondary">
                <ProgressBar progress={progress} buffer={buffer} onProgressChange={(progress)=>{
                    onProgressChange(progress);
                }}/>
                <Toolbar>
                    <div className={classes.imageContainer}>
                        <StyledImage src={currentItem.thumbnails.default.url}/>
                    </div>
                    <IconButton className={classes.playButton} onClick={()=>{onPlayingStateChange()}}>
                        { playingState ?  <Pause/> : <PlayArrow/>}
                    </IconButton>
                    <div style={{display: "block"}}>
                        <Typography className={classes.main}>
                            {currentItem.title}
                        </Typography>
                        <Typography color={"textSecondary"} className={classes.main}>
                            {currentItem.author}
                        </Typography>
                    </div>
                    <ReactPlayer playing={playingState ? true : false } hidden 
                        ref={this.ref} 
                        onProgress={(p)=>{ 
                            onProgressChange(p.played*100);
                            onBufferChange(p.loaded*100); 
                        }} 
                        url={currentItem.url}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}


export default withStyles(styles)(MiniPlayer);