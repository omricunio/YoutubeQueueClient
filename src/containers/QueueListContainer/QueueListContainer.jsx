import React, { Component } from 'react'
import { connect } from 'react-redux';
import QueueList from '../../components/QueueList/QueueList';

class QueueListContainer extends Component {
    render() {
        const { items } = this.props;
        return (
            <QueueList items={items}/>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueListContainer)
