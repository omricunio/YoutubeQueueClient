import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./QueueOptionContent.styles";

const useStyles = makeStyles(styles);

const QueueOptionContent = (props) => {
    const classes = useStyles();
    const { title, Icon } = props;
    return (
        <div className={classes.root}>
            <div className={classes.optionTitle}>
                    {title}
            </div>
            <div className={classes.optionIcon}>
                {<Icon className={classes.optionIconSVG}/>}
            </div>
        </div>
    );
};

export default QueueOptionContent;
