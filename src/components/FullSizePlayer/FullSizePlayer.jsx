import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ItemPreview from "../ItemPreview/ItemPreview";
import Glass from "../Glass/Glass";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { Container } from "@material-ui/core";
import PlayerDisplaySwitcher from "../PlayerDisplaySwitcher/PlayerDisplaySwitcher";
import ReactVideoPlayer from "../ReactVideoPlayer/ReactVideoPlayer";

class FullSizePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMode: 0,
    };
  }

  handleModeChange(mode) {
    this.setState({ selectedMode: mode });
  }

  render() {
    const { classes, currentItem } = this.props;
    const { selectedMode } = this.state;

    const PlayerInfo = () => (
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
    
    return (
      <div className={classes.player}>
        {currentItem ? (
          <>
            <div className={classes.displaySwitcher}>
              <PlayerDisplaySwitcher
                onChange={this.handleModeChange.bind(this)}
              />
            </div>
            {selectedMode === 0 ? <><PlayerInfo /><ReactVideoPlayer hidden/></> : "" }
            {selectedMode === 1 ? <ReactVideoPlayer/> : ""}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FullSizePlayer);
