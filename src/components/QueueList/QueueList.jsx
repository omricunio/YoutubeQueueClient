import React, { Component } from 'react'
import QueueItem from '../QueueItem/QueueItem'
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import styles from './styles';
import { Animated } from "react-animated-css";
import { Container } from '@material-ui/core';
class QueueList extends Component {
    render() {
        const { classes, playedItems, currentItem, items, dispatchDeleteItemByIndex } = this.props;
        return (
            <div>
                <div className={classes.root}>
                <Container maxWidth="sm" m={2}>
                    {                           
                        playedItems.map((item, index) => 
                            <div className={classNames(classes.item, classes.playedItem)}>
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
                            <Animated>
                            <div className={classNames(classes.item, classes.currentItem)}>
                                <QueueItem 
                                        name={currentItem.title} 
                                        author={currentItem.author} 
                                        image={currentItem.thumbnails.high.url}
                                        index={-1}
                                />
                            </div>
                            </Animated>
                        ) : ""
                    }
                    { 
                        items.map((item, index) =>
                        <div className={classes.item} style={{position: 'relative'}}> 
                            <Animated>
                            <QueueItem 
                                name={item.title} 
                                author={item.author} 
                                image={item.thumbnails.high.url}
                                index={index}
                                onDelete={dispatchDeleteItemByIndex}
                            />
                            </Animated>
                        </div>
                        ) 
                    }
                </Container>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QueueList);
