import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import StyledImage from '../StyledImage/StyledImage';

class SpinningImage extends Component {
    render() {
        const { src, className, classes } = this.props;
        return (
            <div>
                <StyledImage src={src} className={classes.root+ ' ' +className} objectFit="cover"/>
            </div>
        )
    }
}

export default withStyles(styles)(SpinningImage)
