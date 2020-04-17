import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

import styles from "./PlayerInfo.styles";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Glass from "../Glass/Glass";
import ItemPreview from "../ItemPreview/ItemPreview";

class PlayerInfo extends Component {
    render() {
        const { classes, currentItem } = this.props;
        return (
            <BackgroundImage src={currentItem.thumbnails.high.url}>
                <Glass>
                <div className={classes.content}>
                    <Container maxWidth="xs">
                    <ItemPreview
                        title={currentItem.title}
                        author={currentItem.author}
                        imageURL={currentItem.thumbnails.high.url}
                    />
                    </Container>
                </div>
                </Glass>
          </BackgroundImage>
        );
    }
}

export default withStyles(styles)(PlayerInfo);