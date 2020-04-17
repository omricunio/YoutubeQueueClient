import React, { Component } from 'react'
import SpinningImage from '../SpinningImage/SpinningImage';
import { Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ItemPreview extends Component {
    render() {
        const { classes, title, author, imageURL } = this.props;
        return (
            <div>
                <SpinningImage imageClassName={classes.spinningImage} src={imageURL}/>
                <div className={classes.text}>
                    <Typography>
                        <Box fontWeight="fontWeightBold">
                            {title}
                        </Box>
                        <Typography color={"textSecondary"}>
                        <Box fontWeight="fontWeightBold">
                            {author}
                        </Box>
                        </Typography>
                    </Typography>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ItemPreview)
