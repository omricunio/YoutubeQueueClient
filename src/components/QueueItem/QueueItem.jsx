import React, { Component } from 'react'
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { DeleteOutlined } from '@material-ui/icons';
class QueueItem extends Component {
    render() {
        const { classes, name, author, image, onDelete, index } = this.props;
        return (
            <Card>
                <CardHeader
                    avatar={
                    <Avatar>
                        {name[0]}
                    </Avatar>
                    }
                    action={
                    <IconButton onClick={()=>onDelete(index)}>
                        <DeleteOutlined/>
                    </IconButton>
                    }
                    title={name}
                    subheader={author}
                />
                <CardMedia
                    className={classes.image}
                    image={image}
                />              
            </Card>
        )
    }
}

export default withStyles(styles)(QueueItem);
