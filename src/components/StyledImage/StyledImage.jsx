import React, { Component } from 'react'
import Image from 'material-ui-image';
import { PropTypes } from 'prop-types';

export default class StyledImage extends Component {
    render() {
        const { className, ...rest } = this.props;
        let { objectFit } = this.props;
        objectFit = objectFit ? objectFit :"contain"
        return (
            <div className={className}>
                <Image
                    style={{maxWidth: "100%", maxHeight: "100%"}} 
                    color="rgba(0, 0, 0, 0)"
                    imageStyle={{objectFit: objectFit}}
                    {...rest}
                />
            </div>
        )
    }
}

StyledImage.propTypes = {
    src: PropTypes.string.isRequired
}