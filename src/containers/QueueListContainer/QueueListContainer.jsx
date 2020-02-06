import React, { Component } from 'react'
import { connect } from 'react-redux';
import QueueList from '../../components/QueueList/QueueList';
import { deleteItemByIndex } from '../../reducers/player/actions';

class QueueListContainer extends Component {
    render() {
        const { items, dispatchDeleteItemByIndex } = this.props;
        return (
            <QueueList items={items} dispatchDeleteItemByIndex={dispatchDeleteItemByIndex}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.player.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteItemByIndex: (index) => dispatch(deleteItemByIndex(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueListContainer)
