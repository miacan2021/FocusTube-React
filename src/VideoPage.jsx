import React from 'react'
import { useLocation } from 'react-router-dom';
import Youtube from 'react-youtube'
import Nav from './components/Nav';

const VideoPage = () => {
    const location = useLocation();
    return (
    <>
   <Nav />
    <Youtube videoId={location.pathname.split('/')[2]}/>
    </>
    )
}
export default VideoPage
