import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setProgress, setBuffer, skipCurrentItem } from '../../reducers/player/actions';
import ReactPlayer from 'react-player';

class ReactPlayerContainer extends Component {
    ref = player => {
        this.player = player;
    }

    render() {
        const { playingState, progress, currentItem, dispatchSetProgress, dispatchSetBuffer, dispatchSkipCurrentItem } = this.props; 
        this.player && Math.abs((this.player.getCurrentTime()/this.player.getDuration()) - (progress/100)) > 0.001 && this.player.seekTo(progress/100);
        return (
            <div class="react-player">
                <ReactPlayer playing={playingState ? true : false }
                width="100%"
                height="100%"
                ref={this.ref} 
                onProgress={(p)=>{ 
                    dispatchSetProgress(p.played*100);
                    dispatchSetBuffer(p.loaded*100); 
                }}
                onEnded={()=>{
                    dispatchSkipCurrentItem();
                }}             
                url={currentItem ? currentItem.url : ""}
            />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    progress: state.player.progress,
    playingState: state.player.playingState,
    currentItem: state.player.currentItem,
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSetProgress: (progress) => dispatch(setProgress(progress)),
    dispatchSetBuffer: (buffer) => dispatch(setBuffer(buffer)),
    dispatchSkipCurrentItem: () => dispatch(skipCurrentItem()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactPlayerContainer);
