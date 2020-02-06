import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core'
import styles from './styles';
import VideoSearchItem from '../VideoSearchItem/VideoSearchItem';
import { PropTypes } from 'prop-types';

class VideoSearchList extends Component {
    render() {
        const { classes, searchResults, onChangePlayedItem, onPause, onAdd } = this.props;
        return (
            <List className={classes.list}>
                { 
                    searchResults.map((item, index) => 
                        (
                            <VideoSearchItem
                                styles={classes.item}
                                index={index} 
                                primaryText={item.title} 
                                secondaryText={item.author} 
                                iconLink={item.thumbnails.default.url}
                                selected={item.isSelected}
                                played={item.isPlayed}
                                onPlayPress={onChangePlayedItem}
                                onPausePress={onPause}
                                onAddPress={onAdd}
                            />
                        )
                    ) 
                }
            </List>
        )
    }
}

VideoSearchList.propTypes = {
    searchResults: PropTypes.array
};

export default withStyles(styles)(VideoSearchList);

