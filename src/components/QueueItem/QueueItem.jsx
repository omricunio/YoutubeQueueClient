import React, { Component } from 'react'
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
class QueueItem extends Component {
    render() {
        const { classes, name, author, image } = this.props;
        return (
            <Card>
                <CardHeader
                    avatar={
                    <Avatar>
                        {name[0]}
                    </Avatar>
                    }
                    //action={}
                    title={name}
                    subheader={author}
                />
                <CardMedia
                    className={classes.image}
                    image={image}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>                
            </Card>
        )
    }
}

export default withStyles(styles)(QueueItem);
