import React, { Component } from 'react'
import { connect } from 'react-redux';
import Player from '../../components/Player/Player';

class PlayerContainer extends Component {
    render() {
        const { isOpen } = this.props;
        console.log(isOpen);
        return (
            <Player isOpen={isOpen} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.player.isOpen
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
