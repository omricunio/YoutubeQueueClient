import React from 'react'
import { Slider, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';

class ProgressBar extends React.Component {
    render() {
        const { classes, progress, buffer, onProgressChange } = this.props
        return (
            <div className={classes.root+' player-slider'}>
                <Slider className={classes.slider} onChange={(e, pro)=>{onProgressChange(pro)}} value={progress}/>
                <LinearProgress className={classes.progressBar} variant="buffer" value={progress} valueBuffer={buffer}/>
            </div>
        )
    }
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    buffer: PropTypes.number,
    onProgressChange: PropTypes.func
}

export default withStyles(styles)(ProgressBar)
