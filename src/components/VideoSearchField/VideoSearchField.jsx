import React from "react";
import {InputBase, Button} from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Search, Send} from "@material-ui/icons";

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
                    <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Search/>}
                    type="submit"
                    >
                        Search
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(VideoSearchField);