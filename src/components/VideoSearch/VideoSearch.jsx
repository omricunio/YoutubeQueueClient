import React from "react";
import {InputBase} from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Search} from "@material-ui/icons";

class VideoSearch extends React.Component {
    render() {
        const { topClassName, classes } = this.props;
        return (
            <div className={topClassName}>
                <div className={classes.container}>
                    <Search className={classes.searchIcon}/>
                    <InputBase placeholder={"Search.."}>
                    </InputBase>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(VideoSearch);
