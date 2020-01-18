import React, { Component } from 'react'
import VideoSearch from '../../components/VideoSearch/VideoSearch'
import { connect } from 'react-redux';
import { closeVideoSearch } from '../../reducers/videoSearch/actions';

class VideoSearchContainer extends Component {
    render() {
        const { isOpen, isLoading, dispatchCloseVideoSearch } = this.props;
        return (
            <VideoSearch isOpen={isOpen} isLoading={isLoading} onClose={dispatchCloseVideoSearch}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.videoSearch.isOpen,
    isLoading: state.videoSearch.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    dispatchCloseVideoSearch: () => dispatch(closeVideoSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearchContainer)