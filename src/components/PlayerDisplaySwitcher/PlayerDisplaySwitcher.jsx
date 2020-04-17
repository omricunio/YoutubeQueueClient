import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from "@material-ui/core";
import { Photo, Movie } from "@material-ui/icons"

import styles from "./PlayerDisplaySwitcher.styles";
import { func } from "prop-types";

class PlayerDisplaySwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }

    onTabChange(event, value) {
        this.setState({selectedTab: value});
        this.props.onChange(value);
    }

    render() {
        const { selectedTab } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Tabs value={selectedTab} onChange={this.onTabChange.bind(this)}>
                    <Tab icon={<Photo/>}/>
                    <Tab icon={<Movie/>}/>
                </Tabs>
            </div>
        );
    }
}

PlayerDisplaySwitcher.propTypes = {
    onChange: func
}

export default withStyles(styles)(PlayerDisplaySwitcher);