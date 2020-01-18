import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class CenteredLoading extends Component {
    render() {
        const { classes, hidden } = this.props;
        return (
            <div className={classes.container}>
                {this.props.children}
                {!hidden ? <CircularProgress className={classes.spinner}/> : ""}
            </div>
        )
    }
}

export default withStyles(styles)(CenteredLoading);