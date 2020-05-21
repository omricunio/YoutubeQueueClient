import React, { Component } from 'react'
import { connect } from 'react-redux';
import QueueList from '../../components/QueueList/QueueList';
import { deleteItemFromQueue } from '../../sagas/queue/actions';

class QueueListContainer extends Component {
    render() {
        const { items, playedItems, currentItem, dispatchDeleteItemByIndex } = this.props;
        return (
            <QueueList items={items} playedItems={playedItems} currentItem={currentItem} dispatchDeleteItemByIndex={dispatchDeleteItemByIndex}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.player.items,
        playedItems: state.player.playedItems,
        currentItem: state.player.currentItem
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteItemByIndex: (index) => dispatch(deleteItemFromQueue(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueListContainer)
