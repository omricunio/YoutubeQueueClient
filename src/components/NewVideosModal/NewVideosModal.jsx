import React, { Component } from 'react'
import { Modal, Card } from '@material-ui/core'
import VideoSearchContainer from '../../containers/VideoSearchContainer/VideoSearchContainer'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import VideoSearchList from '../VideoSearchList/VideoSearchList';
import { PropTypes } from 'prop-types';

class NewVideosModal extends Component {
    constructor(){
        super();
        this.state = { open: true }
    }
    render() {
        const { classes } = this.props
        const { open } = this.state;
        return (
            <Modal open={open} className={classes.container}
            onClose={()=>{this.setState({open: false})}}>
                <Card className={classes.card}>
                    <VideoSearchContainer/>
                    <VideoSearchList/>
                </Card>
            </Modal>
        )
    }
}

NewVideosModal.propType = {
    isOpen: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(NewVideosModal);
