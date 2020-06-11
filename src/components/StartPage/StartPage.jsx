import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./StartPage.styles";
import { Create, CloudQueue, QueueMusic } from "@material-ui/icons";
import QueueOption from "../QueueOption";
import { Container } from "@material-ui/core";
import QueueOptionContent from "../QueueOptionContent/QueueOptionContent";

const useStyles = makeStyles(styles);

const StartPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                Welcome To Youtube Queue
            </div>
            <div className={classes.titleIconContainer}>
                <QueueMusic className={classes.titleIcon}></QueueMusic>
            </div>
            <Container maxWidth="lg" className={classes.container}>
            <div className={classes.options}>
                <QueueOption onClick={()=>{}}>
                    <QueueOptionContent title={"Create a New Queue"} Icon={Create}></QueueOptionContent>
                </QueueOption>              
                <QueueOption>
                    <QueueOptionContent title={"Join a Queue"} Icon={CloudQueue}></QueueOptionContent>
                </QueueOption>
            </div>
            </Container>

        </div>
    );
};

export default StartPage;
