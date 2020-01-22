import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Add, WbSunny } from "@material-ui/icons"
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

class TopBar extends React.Component {
    render() {
        const { classes, title, onDarkModeClick, onAddClick } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" className={classes.addButton} onClick={onAddClick}>
                            <Add />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        <IconButton color="inherit" onClick={onDarkModeClick}>
                            <WbSunny />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

TopBar.propTypes = {
    onDarkModeClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(TopBar);
