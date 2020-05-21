import React, { Component } from 'react'
import { ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import StyledImage from '../StyledImage/StyledImage';
import { PlayArrow, Pause, Add } from '@material-ui/icons';

class VideoSearchItem extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidUpdate() {
        const { selected } = this.props
        if(selected) {
            this.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }

    render() {
        const { classes, selected, primaryText, secondaryText, iconLink, played, onPlayPress, onPausePress, onAddPress, index } = this.props;
  
        return (
            <ListItem selected={selected} ref={this.ref}>
                <ListItemIcon>
                    <StyledImage className={classes.icon}
                        src={iconLink}/>                           
                </ListItemIcon>
                <ListItemText className={classes.listItem}
                    primaryTypographyProps={{noWrap: true, component: "p"}}
                    secondaryTypographyProps={{noWrap: true}}
                    primary={primaryText}
                    secondary={secondaryText}
                    
                />
                <IconButton onClick={ ()=>onAddPress(index) }>
                    <Add/>
                </IconButton>
                <IconButton onClick={ played ? onPausePress : ()=>onPlayPress(index)}>
                    { played ? <Pause/> : <PlayArrow/> }
                </IconButton>
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