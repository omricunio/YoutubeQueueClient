import React, { Component } from 'react'
import QueueItem from '../QueueItem/QueueItem'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class QueueList extends Component {
    render() {
        const { classes, items } = this.props;
        return (
            <div className={classes.root}>
                    { 
                        items.map((item) =>
                        <div className={classes.item}> 
                        <QueueItem name={item.title} author={item.author} image={item.thumbnails.high.url}/>
                        </div>
                        ) 
                    }
            </div>
        )
    }
}

export default withStyles(styles)(QueueList);
