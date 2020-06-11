import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./QueueOption.styles";

const useStyles = makeStyles(styles);

const QueueOption = (props) => {
    const classes = useStyles();
    const { children, className } = props;
    
    return (
        <div className={className ? classNames(classes.root, className) : classes.root}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
};

export default QueueOption;
