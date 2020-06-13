import React from "react";
import QRCode from "qrcode.react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./QueueQR.styles";
import { Modal, Card, Typography } from "@material-ui/core";
import { Animated } from "react-animated-css";

const useStyles = makeStyles(styles);

const QueueQR = (props) => {
    const classes = useStyles();
    const { queueGuid, isOpen, onClose } = props;
    return (
            <Modal open={isOpen} className={classes.root} onClose={onClose}>
                <div className={classes.content}>
                    <Typography align="center" variant="h4" className={classes.title}>{queueGuid}</Typography>
                    <div className={classes.qrCodeContainer}>
                        <QRCode 
                            value={window.location.href} 
                            bgColor="rgba(0, 0, 0, 0)" 
                            fgColor="rgba(255, 255, 255, 1)" 
                            renderAs="svg"
                            className={classes.qrCode}
                        ></QRCode>
                    </div>
                </div>
            </Modal>
    );
};

export default QueueQR;
