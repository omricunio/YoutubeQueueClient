import React, { Component } from 'react'
import QueueItem from '../QueueItem/QueueItem'
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import styles from './styles';

class QueueList extends Component {
    render() {
        const { classes, playedItems, items, dispatchDeleteItemByIndex } = this.props;
        const currentItem = playedItems.shift();
        return (
            <div>
                <div className={classes.root}>
                    {                           
                        playedItems.map((item, index) => 
                            <div className={classes.item}>
                                <QueueItem 
                                        name={item.title} 
                                        author={item.author} 
                                        image={item.thumbnails.high.url}
                                        index={-1}
                                />
                            </div>
                        )
                    }
                    {
                        currentItem ? (
                            <div className={classNames(classes.item, classes.firstItem)}>
                                <QueueItem 
                                        name={currentItem.title} 
                                        author={currentItem.author} 
                                        image={currentItem.thumbnails.high.url}
                                        index={-1}
                                />
                            </div>
                        ) : ""
                    }
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
