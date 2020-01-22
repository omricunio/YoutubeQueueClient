import React, { Component } from 'react'
import styles from './styles';
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import StyledImage from '../StyledImage/StyledImage';

class MiniPlayer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classes.bottomBar} color="secondary">
                <LinearProgress variant="buffer" value={5} valueBuffer={8}/>
                <Toolbar>
                    <div className={classes.imageContainer}>
                        <StyledImage src="https://i.ytimg.com/an_webp/k2qgadSvNyU/mqdefault_6s_480x270.webp?du=3000&sqp=CNj0kfEF&rs=AOn4CLAyObH8ki5h99SgkMtNXLdW9FB6Tg"/>
                    </div>
                    <IconButton className={classes.playButton}>
                        <PlayArrow/>
                    </IconButton>
                    <div style={{display: "block"}}>
                        <Typography className={classes.main}>
                            Look at her now
                        </Typography>
                        <Typography color={"textSecondary"} className={classes.main}>
                            Selena Gomez
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(MiniPlayer);