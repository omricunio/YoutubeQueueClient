import React, { Component, useEffect } from "react";

import TopBarContainer from "../../containers/TopBarContainer/TopBarContainer";
import VideoSearchContainer from "../../containers/VideoSearchContainer/VideoSearchContainer";
import MainContainer from "../../containers/MainContainer/MainContainer";
import { useParams, useHistory } from "react-router-dom";

const HomePage = (props) => {
    const { dispatchFetchAndSetQueue, dispatchCreateQueue } = props;
    const queueGuidParam = useParams().queueGuid; 
    const queueGuidState = props.queueGuid;
    const history = useHistory();

    useEffect(()=>{
        if(queueGuidParam) {
            dispatchFetchAndSetQueue(queueGuidParam);
        }
        else {
            dispatchCreateQueue();
        }
    }, []);
    
    if(!queueGuidParam && queueGuidState) {
        history.push(queueGuidState);
    }
    
    return (
        <>
            <TopBarContainer/>
            <VideoSearchContainer/>
            <MainContainer/>          
        </>
    )
};


export default HomePage;