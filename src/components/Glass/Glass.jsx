import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class Glass extends Component {
    render() {
        const { classes, isClear } = this.props; 
        return (
            <div className={classes.root + ' ' + (!isClear ? classes.notClear : '')}>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(Glass)
