import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import ItemPreview from '../ItemPreview/ItemPreview';
import ReactVideoPlayer from '../ReactVideoPlayer/ReactVideoPlayer';
import Glass from '../Glass/Glass';

class FullSizePlayer extends Component {
    render() {
        const { classes, currentItem } = this.props;
        return (
            <div className={classes.player}>
                <ReactVideoPlayer>
                    <Glass>
                        <div className={classes.content}>
                            <div className={classes.itemPreview}>      
                            { currentItem ? <ItemPreview title={currentItem.title} author={currentItem.author} imageURL={currentItem.thumbnails.high.url}/> : "" }
                            </div>
                        </div>                        
                    </Glass>
                </ReactVideoPlayer>
            </div>
        )
    }
}

export default withStyles(styles)(FullSizePlayer)
