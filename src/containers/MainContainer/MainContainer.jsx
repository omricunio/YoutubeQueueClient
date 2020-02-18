import React, { Component } from 'react'
import { connect } from 'react-redux';
import Main from '../../components/Main/Main';

class MainContainer extends Component {
    render() {
        const { isPlayerOpen } = this.props;
        return (
            <Main isPlayerOpen={isPlayerOpen}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isPlayerOpen: state.player.isOpen
    }
}
export default connect(mapStateToProps)(MainContainer)
