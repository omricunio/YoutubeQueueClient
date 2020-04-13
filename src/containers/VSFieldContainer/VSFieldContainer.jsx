import React, { Component } from 'react'
import VideoSearchField from '../../components/VideoSearchField/VideoSearchField'
import { connect } from 'react-redux';
import { searchValueChanged } from '../../reducers/videoSearch/actions';
import { searchFired } from '../../sagas/videoSearch/actions';

class VSFieldContainer extends Component {
    render() {
        const { searchValue, dispatchSearchValueChange, dispatchSearchFired } = this.props;
        return (
            <VideoSearchField searchValue={searchValue} onSearchValueChanged={(e)=>{(dispatchSearchValueChange(e.target.value))}} onSearch={dispatchSearchFired}/>
        )
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.videoSearch.searchValue
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearchValueChange: (searchValue) => { dispatch(searchValueChanged(searchValue)) },
    dispatchSearchFired: () => { dispatch(searchFired()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(VSFieldContainer);
