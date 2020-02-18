import React, { Component } from 'react'
import QueueItem from '../QueueItem/QueueItem'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class QueueList extends Component {
    render() {
        const { classes, items, dispatchDeleteItemByIndex } = this.props;
        return (
            <div>
                <div className={classes.root}>
                        { 
                            items.map((item, index) =>
                            <div className={classes.item}> 
                            <QueueItem 
                                name={item.title} 
                                author={item.author} 
                                image={item.thumbnails.high.url}
                                index={index}
                                onDelete={dispatchDeleteItemByIndex}
                            />
                            </div>
                            ) 
                        }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QueueList);
