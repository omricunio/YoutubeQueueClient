import React, { Component } from 'react'
import styles from './styles';
import { AppBar, Typography, IconButton, Toolbar, Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { PlayArrow, Pause, SkipNext, ExpandLess, ExpandMore } from '@material-ui/icons';
import StyledImage from '../StyledImage/StyledImage';
import ProgressBar from '../ProgressBar/ProgressBar';

class MiniPlayer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    ref = player => {
        this.player = player;
    }

    render() {
        const { 
                classes, 
                progress, 
                volume,
                buffer, 
                currentItem, 
                playingState, 
                onProgressChange, 
                onVolumeChange,
                onPlayingStateChange, 
                onSkipSong,
                onToggleExpand,
                isOpen             
            } = this.props;
        return (
            <AppBar className={classes.bottomBar} color="secondary">
                <ProgressBar progress={progress} buffer={buffer} onProgressChange={(progress)=>{
                    onProgressChange(progress);
                }}/>
                <Toolbar>
                    <div className={classes.imageContainer}>
                        { currentItem ? <StyledImage src={currentItem.thumbnails.default.url}/> : ""}
                    </div>
                    <IconButton className={classes.playButton} onClick={()=>{onPlayingStateChange()}}>
                        { playingState ?  <Pause/> : <PlayArrow/>}
                    </IconButton>
                    <IconButton className={classes.skipButton} onClick={()=>{onSkipSong()}}>
                        { <SkipNext/> }
                    </IconButton>
                    <Slider className={classes.volume} value={volume} onChange={(e, value)=>onVolumeChange(value)}/>
                    <div className={classes.main}>
                        <Typography>
                            {currentItem ? currentItem.title : "Not Playing"}
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {currentItem ? currentItem.author : "" }
                        </Typography>
                    </div>
                    <IconButton onClick={onToggleExpand}>
                        { isOpen ? <ExpandMore/> : <ExpandLess/> }
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}


export default withStyles(styles)(MiniPlayer);