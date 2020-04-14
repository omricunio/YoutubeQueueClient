import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import StyledImage from '../StyledImage/StyledImage';

class ReactVideoPlayer extends Component {
    render() {
        const { classes, src } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.image}>
                    <StyledImage src={src} objectFit="cover"/>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(ReactVideoPlayer)
