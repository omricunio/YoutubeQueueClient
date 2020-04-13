import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import StyledImage from '../StyledImage/StyledImage';
import disc from '../../assets/photos/disc.png';

class SpinningImage extends Component {
    render() {
        const { src, imageClassName, classes } = this.props;
        return (
            <div className={classes.root}>
                <img className={classes.disc} src={disc}/>
                <div className={classes.image}>
                    <StyledImage src={src} className={imageClassName} objectFit="cover"/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SpinningImage)
