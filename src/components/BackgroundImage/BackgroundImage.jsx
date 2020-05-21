import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import StyledImage from '../StyledImage/StyledImage';

class BackgroundImage extends Component {
    render() {
        const { classes, src } = this.props;
        return (
            <div className={classes.container}>
                <img src={src} className={classes.image} alt="No background"></img>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(BackgroundImage)
