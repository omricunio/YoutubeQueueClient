import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class FullSizePlayer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.player}>
                
            </div>
        )
    }
}

export default withStyles(styles)(FullSizePlayer)
