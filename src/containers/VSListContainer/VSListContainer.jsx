import React, { Component } from 'react'
import { connect } from 'react-redux';
import VideoSearchList from '../../components/VideoSearchList/VideoSearchList';

class VSListContainer extends Component {
    render() {
        const { searchResults } = this.props;
        return (
            <VideoSearchList searchResults={searchResults}/>
        )
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.videoSearch.searchResults
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VSListContainer);
