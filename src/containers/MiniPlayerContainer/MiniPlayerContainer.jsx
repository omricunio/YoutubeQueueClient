import React, { Component } from 'react'
import { connect } from 'react-redux';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import { setProgress, setBuffer, togglePlayingState, skipCurrentItem, togglePlayerOpenState } from '../../reducers/player/actions';
class MiniPlayerContainer extends Component {
    render() {
        const { progress, buffer, playingState, currentItem, dispatchSetProgress, dispatchSetBuffer, dispatchTogglePlayingState, dispatchSkipCurrentItem, dispatchTogglePlayerOpenState, isOpen } = this.props; 
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
                onToggleExpand={dispatchTogglePlayerOpenState}
                isOpen={isOpen}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    progress: state.player.progress,
    buffer: state.player.buffer,
    playingState: state.player.playingState,
    currentItem: state.player.currentItem,
    isOpen: state.player.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSetProgress: (progress) => dispatch(setProgress(progress)),
    dispatchSetBuffer: (buffer) => dispatch(setBuffer(buffer)),
    dispatchTogglePlayingState: (playingState) => dispatch(togglePlayingState(playingState)),
    dispatchSkipCurrentItem: () => dispatch(skipCurrentItem()),
    dispatchTogglePlayerOpenState: () => dispatch(togglePlayerOpenState())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayerContainer);
