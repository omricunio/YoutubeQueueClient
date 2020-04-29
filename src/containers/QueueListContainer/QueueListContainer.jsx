import React, { Component } from 'react'
import { connect } from 'react-redux';
import QueueList from '../../components/QueueList/QueueList';
import { deleteItemByIndex } from '../../reducers/player/actions';

class QueueListContainer extends Component {
    render() {
        const { items, playedItems, dispatchDeleteItemByIndex } = this.props;
        return (
            <QueueList items={items} playedItems={playedItems} dispatchDeleteItemByIndex={dispatchDeleteItemByIndex}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.player.items,
        playedItems: state.player.playedItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteItemByIndex: (index) => dispatch(deleteItemByIndex(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueListContainer)
