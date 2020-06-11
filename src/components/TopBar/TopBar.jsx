import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Badge } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Add, WbSunny, Edit } from "@material-ui/icons"
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

class TopBar extends React.Component {
    render() {
        const { classes, title, onDarkModeClick, onAddClick, queueGuid } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" className={classes.addButton} onClick={onAddClick}>
                            <Add />
                        </IconButton>
                        <div className={classes.main}>
                            <Badge className={classes.queueGuidContainer} color="secondary" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}} badgeContent={<Edit fontSize={"inherit"}/>}>
                                <div className={classes.queueGuid}>
                                    {queueGuid}
                                </div>
                            </Badge>
                            <div>
                                <Typography variant="h6" className={classes.title}>
                                    {title}
                                </Typography>
                            </div>
                        </div>
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
