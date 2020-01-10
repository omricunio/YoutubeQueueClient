import React, { Component } from 'react'
import NewVideosModal from '../../components/NewVideosModal/NewVideosModal'
import { connect } from 'react-redux';
import { closeVideoSearch } from '../../reducers/videoSearch/actions';

class NewVideosContainer extends Component {
    render() {
        return (
            <NewVideosModal/>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    dispatchCloseVideoSearch: () => dispatch(closeVideoSearch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewVideosContainer)