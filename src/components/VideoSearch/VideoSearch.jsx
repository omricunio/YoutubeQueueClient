import React from "react";
import {InputBase} from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Search} from "@material-ui/icons";
import Autocomplete from '@material-ui/lab/Autocomplete';

class VideoSearch extends React.Component {
    render() {
        const { topClassName, classes } = this.props;
        return (
            <div className={topClassName}>
                <div className={classes.container}>
                    <Search className={classes.searchIcon}/>
                    <InputBase className={classes.inputBase} placeholder={"Search.."}>
                    </InputBase>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(VideoSearch);


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 }
]