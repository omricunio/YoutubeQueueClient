import React, { Component } from 'react'
import ReactPlayerContainer from '../../containers/ReactPlayerContainer/ReactPlayerContainer'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ReactVideoPlayer extends Component {
    render() {
        const { classes, isHidden } = this.props;
        return (
            <div className={classes.container + (isHidden ? " " + classes.hidden : "")}>
                <div className={classes.video}>
                    <ReactPlayerContainer/>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(ReactVideoPlayer)
