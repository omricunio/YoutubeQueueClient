import React, { Component, useEffect } from "react";

import TopBarContainer from "../../containers/TopBarContainer/TopBarContainer";
import VideoSearchContainer from "../../containers/VideoSearchContainer/VideoSearchContainer";
import MainContainer from "../../containers/MainContainer/MainContainer";
import { useParams } from "react-router-dom";

const HomePage = (props) => {
    const { dispatchFetchQueue, dispatchCreateQueue } = props; 
    const { queueGuid } = useParams();

    useEffect(()=>{
        if(queueGuid) {
            dispatchFetchQueue(queueGuid);
        }
        else {
            dispatchCreateQueue();
        }
    }, []);

    return (
        <>
            <TopBarContainer/>
            <VideoSearchContainer/>
            <MainContainer/>          
        </>
    )
};


export default HomePage;