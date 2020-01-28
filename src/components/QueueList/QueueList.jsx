import React, { Component } from 'react'
import QueueItem from '../QueueItem/QueueItem'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

export class QueueList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.item}>
                    <QueueItem/>
                </div>
                <QueueItem className={classes.item}/>
            </div>
        )
    }
}

export default withStyles(styles)(QueueList);
