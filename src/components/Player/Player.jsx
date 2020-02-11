import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class Player extends Component {
    render() {
        const { classes, isOpen } = this.props;
        return (
            <div className={ isOpen ? classes.playerOpen : classes.playerClosed }>
                dsds
            </div>
        )
    }
}

export default withStyles(styles)(Player)
