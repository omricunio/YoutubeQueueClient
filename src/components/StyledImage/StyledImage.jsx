import React, { Component } from 'react'
import Image from 'material-ui-image';
import { PropTypes } from 'prop-types';

export default class StyledImage extends Component {
    render() {
        const { src } = this.props;
        return (
            <Image
                style={{width: "100%", height: "100%"}} 
                color="rgba(0, 0, 0, 0)"
                imageStyle={{objectFit: "contain"}}
                src={src}
            />
        )
    }
}

StyledImage.propTypes = {
    src: PropTypes.string.isRequired
}