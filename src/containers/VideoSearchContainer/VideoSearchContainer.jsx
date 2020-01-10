import React, { Component } from 'react'
import VideoSearch from '../../components/VideoSearch/VideoSearch'
import { connect } from 'react-redux';
import { closeVideoSearch } from '../../reducers/videoSearch/actions';

class VideoSearchContainer extends Component {
    render() {
        const { isOpen , dispatchCloseVideoSearch } = this.props;
        return (
            <VideoSearch isOpen={isOpen} onClose={dispatchCloseVideoSearch}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.videoSearch.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    dispatchCloseVideoSearch: () => dispatch(closeVideoSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearchContainer)