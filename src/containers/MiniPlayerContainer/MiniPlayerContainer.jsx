import React, { Component } from 'react'
import { connect } from 'react-redux';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import { setProgress, setBuffer, togglePlayingState, skipCurrentItem } from '../../reducers/player/actions';

class MiniPlayerContainer extends Component {
    render() {
        const { progress, buffer, playingState, currentItem, dispatchSetProgress, dispatchSetBuffer, dispatchTogglePlayingState, dispatchSkipCurrentItem } = this.props; 
        return (
            <MiniPlayer 
                progress={progress} 
                buffer={buffer} 
                playingState={playingState}
                currentItem={currentItem}
                onProgressChange={dispatchSetProgress} 
                onBufferChange={dispatchSetBuffer} 
                onPlayingStateChange={dispatchTogglePlayingState}
                onSkipSong={dispatchSkipCurrentItem}
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
    dispatchSetProgress: (progress) => dispatch(setProgress(progress)),
    dispatchSetBuffer: (buffer) => dispatch(setBuffer(buffer)),
    dispatchTogglePlayingState: (playingState) => dispatch(togglePlayingState(playingState)),
    dispatchSkipCurrentItem: () => dispatch(skipCurrentItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayerContainer);
