import React from "react";
import {InputBase} from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Search} from "@material-ui/icons";

class VideoSearchField extends React.Component {
    render() {
        const { searchValue, onSearchValueChanged, classes } = this.props;
        return (
            <div>
                <div className={classes.container}>
                    <Search className={classes.searchIcon}/>
                    <InputBase autoFocus className={classes.inputBase} value={searchValue} onChange={onSearchValueChanged} placeholder={"Search.."}>
                    </InputBase>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(VideoSearchField);