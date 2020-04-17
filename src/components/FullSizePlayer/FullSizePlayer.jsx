import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PlayerDisplaySwitcher from "../PlayerDisplaySwitcher/PlayerDisplaySwitcher";
import ReactVideoPlayer from "../ReactVideoPlayer/ReactVideoPlayer";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

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
    
    return (
      <div className={classes.player}>
        {currentItem ? (
          <>
            <div className={classes.displaySwitcher}>
              <PlayerDisplaySwitcher
                onChange={this.handleModeChange.bind(this)}
              />
            </div>
            {selectedMode === 0 ? <PlayerInfo currentItem={currentItem} /> : ""}
            <ReactVideoPlayer isHidden={selectedMode === 1 ? false : true}/>    
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FullSizePlayer);
