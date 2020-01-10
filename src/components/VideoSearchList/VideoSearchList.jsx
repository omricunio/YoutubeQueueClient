import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core'

import styles from './styles';
import VideoSearchItem from '../VideoSearchItem/VideoSearchItem';
class VideoSearchList extends Component {
    render() {
        return (
            <List>
                { itemsMock.map(item => <VideoSearchItem primaryText={item.name} secondaryText={item.creator} iconLink={item.photo}/>) }
            </List>
        )
    }
}

const itemsMock = [
    {
        name: "Look at her now",
        creator: "Selena Gomez",
        photo: "https://i.ytimg.com/vi/8u-_64S7plI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBgOvWVbZEyKyVl4CKaLrU6Pr7BIg"
    },
    {
        name: "God Is A Dancer",
        creator: "Tiesto & Mabel",
        photo: "https://i.ytimg.com/vi/jnwDkVo6DxA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLADaeyeWALmpL9bUj3tpqet8uDZRw"
    },
    {
        name: "Don't Start Now",
        creator: "Dua Lipa",
        photo: "https://i.ytimg.com/vi/oygrmJFKYZY/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAOVruRdN9x0CIu9Y3AmeT56YHknA"
    },
    {
        name: "Younger",
        creator: "Jonas Blue & HRVY",
        photo: "https://i.ytimg.com/vi/WGB0UpLNK8I/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDGk3-1gqIE_SDsybRlcN7rStRfkQ"
    }
]

export default withStyles(styles)(VideoSearchList);

