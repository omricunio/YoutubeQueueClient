import React, { Component } from 'react'
import { Modal, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import VideoSearchList from '../VideoSearchList/VideoSearchList';
import { PropTypes } from 'prop-types';
import VideoSearchField from '../VideoSearchField/VideoSearchField';

class VideoSearch extends Component {
    constructor(){
        super();
    }
    render() {
        const { classes, isOpen, onClose } = this.props
        return (
            <Modal open={isOpen} className={classes.container}
            onClose={onClose}>
                <Card className={classes.card}>
                    <VideoSearchField/>
                    <VideoSearchList/>
                </Card>
            </Modal>
        )
    }
}

VideoSearch.propType = {
    isOpen: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(VideoSearch);