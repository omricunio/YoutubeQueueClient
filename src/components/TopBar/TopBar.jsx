import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Add, WbSunny } from "@material-ui/icons"
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';

class TopBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="secondary" className={classes.addButton}>
                            <Add/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            YouTube Smart Cue
                        </Typography>
                        <IconButton color="secondary">
                            <WbSunny/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(TopBar);
