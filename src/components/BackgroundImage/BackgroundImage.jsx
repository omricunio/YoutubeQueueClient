import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import StyledImage from '../StyledImage/StyledImage';

class BackgroundImage extends Component {
    render() {
        const { classes, src } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.image}>
                    <StyledImage src={src} objectFit="cover" disableTransition={true}/>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(BackgroundImage)
