import React, { Component } from 'react'
import { connect } from 'react-redux';
import FullSizePlayer from '../../components/FullSizePlayer/FullSizePlayer';

class FullSizePlayerContainer extends Component {
    render() {
        const { progress, buffer, playingState, currentItem } = this.props; 
        return (
            <FullSizePlayer 
                progress={progress} 
                buffer={buffer} 
                playingState={playingState}
                currentItem={currentItem}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    progress: state.player.progress,
    buffer: state.player.buffer,
    playingState: state.player.playingState,
    currentItem: state.player.currentItem
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FullSizePlayerContainer);
