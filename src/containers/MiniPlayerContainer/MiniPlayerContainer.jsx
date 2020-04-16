import React, { Component } from 'react'
import { connect } from 'react-redux';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import { setProgress, togglePlayingState, skipCurrentItem, togglePlayerOpenState, setVolume } from '../../reducers/player/actions';
class MiniPlayerContainer extends Component {
    render() {
        const { progress, volume, buffer, playingState, currentItem, dispatchSetProgress, dispatchTogglePlayingState, dispatchSkipCurrentItem, dispatchTogglePlayerOpenState, dispatchSetVolume, isOpen } = this.props; 
        return (
            <MiniPlayer 
                progress={progress} 
                volume={volume}
                buffer={buffer} 
                playingState={playingState}
                currentItem={currentItem}
                onProgressChange={dispatchSetProgress} 
                onPlayingStateChange={dispatchTogglePlayingState}
                onSkipSong={dispatchSkipCurrentItem}
                onToggleExpand={dispatchTogglePlayerOpenState}
                onVolumeChange={dispatchSetVolume}
                isOpen={isOpen}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    progress: state.player.progress,
    volume: state.player.volume,
    buffer: state.player.buffer,
    playingState: state.player.playingState,
    currentItem: state.player.currentItem,
    isOpen: state.player.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSetProgress: (progress) => dispatch(setProgress(progress)),
    dispatchSetVolume: (volume) => dispatch(setVolume(volume)),
    dispatchTogglePlayingState: (playingState) => dispatch(togglePlayingState(playingState)),
    dispatchSkipCurrentItem: () => dispatch(skipCurrentItem()),
    dispatchTogglePlayerOpenState: () => dispatch(togglePlayerOpenState())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayerContainer);
