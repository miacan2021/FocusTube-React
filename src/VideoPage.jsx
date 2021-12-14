import React from 'react'
import { useLocation } from 'react-router-dom';
import Youtube from 'react-youtube'

const VideoPage = () => {
    const location = useLocation();
    return (
   
    <Youtube videoId={location.pathname.split('/')[2]}/>
 
    )
}
export default VideoPage
