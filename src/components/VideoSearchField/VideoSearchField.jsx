import React from "react";
import {InputBase, Fab} from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Search} from "@material-ui/icons";

class VideoSearchField extends React.Component {
    render() {
        const { searchValue, onSearchValueChanged, onSearch, classes } = this.props;
        return (
            <div>
                <form onSubmit={(e)=>{ 
                    e.preventDefault();
                    onSearch(); 
                }} className={classes.container}>
                    <Search className={classes.searchIcon}/>
                    <InputBase autoFocus className={classes.inputBase} value={searchValue} onChange={onSearchValueChanged} placeholder={"Search.."}>
                    </InputBase>
                    <Fab
                        size="small"
                        color="primary"
                        type="submit"
                    >
                        <Search/>
                    </Fab>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(VideoSearchField);