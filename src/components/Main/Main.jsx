
import React, { Component } from 'react'
import QueueListContainer from '../../containers/QueueListContainer/QueueListContainer';
import MiniPlayerContainer from '../../containers/MiniPlayerContainer/MiniPlayerContainer';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import FullSizePlayerContainer from '../../containers/FullSizePlayerContainer/FullSizePlayerContainer';

class Main extends Component {
    render() {
        const { classes, isPlayerOpen } = this.props;
        return (
            <div className={ classes.container }>
                <div className={ classes.display + ' ' + (!isPlayerOpen ? classes.opened : classes.queue) }>
                    <QueueListContainer/>
                </div>
                <MiniPlayerContainer/>
                <div className={ classes.display + ' '+ (isPlayerOpen ? classes.opened : classes.player) }>
                    <FullSizePlayerContainer/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Main)