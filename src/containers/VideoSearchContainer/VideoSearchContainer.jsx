import React from "react";
import VideoSearch from "../../components/VideoSearch/VideoSearch";

class VideoSearchContainer extends React.Component {
    render() {
        const {topClassName} = this.props;
        return <VideoSearch topClassName={topClassName} />
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default VideoSearchContainer
