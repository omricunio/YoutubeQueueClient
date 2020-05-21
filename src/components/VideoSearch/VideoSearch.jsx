import React, { Component } from 'react'
import { Modal, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';
import VSFieldContainer from '../../containers/VSFieldContainer/VSFieldContainer';
import VSListContainer from '../../containers/VSListContainer/VSListContainer';
import CenteredLoading from '../CenteredLoading/CenteredLoading';

class VideoSearch extends Component {
    render() {
        const { classes, isOpen, isLoading, onClose } = this.props
        return (
            <Modal open={isOpen} className={classes.container}
            onClose={onClose}>
                <CenteredLoading hidden={!isLoading}>
                    <Card className={classes.card}>
                        <VSFieldContainer/>
                        <VSListContainer/>
                    </Card>
                </CenteredLoading>
            </Modal>
        )
    }
}

VideoSearch.propType = {
    isOpen: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(VideoSearch);