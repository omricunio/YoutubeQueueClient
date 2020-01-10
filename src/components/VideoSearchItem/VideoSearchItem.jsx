import React, { Component } from 'react'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import Image from 'material-ui-image';
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import StyledImage from '../StyledImage/StyledImage';

class VideoSearchItem extends Component {
    render() {
        const { classes, selected, primaryText, secondaryText, iconLink } = this.props;        
        return (
            <ListItem selected={selected}>
                <ListItemIcon>
                    <StyledImage 
                        src={iconLink}/>                           
                </ListItemIcon>
                <ListItemText className={classes.listItem}
                    primary={primaryText}
                    secondary={secondaryText}
                />
            </ListItem>
        )
    }
}

VideoSearchItem.propTypes = {
    selected: PropTypes.bool,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    iconLink: PropTypes.string
};

export default withStyles(styles)(VideoSearchItem)