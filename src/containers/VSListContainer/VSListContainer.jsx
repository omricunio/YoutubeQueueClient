import React, { Component } from 'react'
import { connect } from 'react-redux';
import VideoSearchList from '../../components/VideoSearchList/VideoSearchList';
import { setCurrentPlayingItemById, pausePlayedItemInSearch, addItemAndCloseSearch } from '../../sagas/videoSearch/actions';

class VSListContainer extends Component {
    render() {
        const { searchResults, dispatchSetCurrentPlayingItemById, dispatchPausePlayedItemInSearch, dispatchAddItemAndCloseSearch } = this.props;
        return (
            <VideoSearchList 
                searchResults={searchResults} 
                onChangePlayedItem={dispatchSetCurrentPlayingItemById} 
                onPause={dispatchPausePlayedItemInSearch}
                onAdd={dispatchAddItemAndCloseSearch}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.videoSearch.searchResults
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSetCurrentPlayingItemById: (index) => dispatch(setCurrentPlayingItemById(index)),
    dispatchPausePlayedItemInSearch: () => dispatch(pausePlayedItemInSearch()),
    dispatchAddItemAndCloseSearch: (index) => dispatch(addItemAndCloseSearch(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(VSListContainer);
