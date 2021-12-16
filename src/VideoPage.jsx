import React from 'react'
import { useLocation } from 'react-router-dom';
import Youtube from 'react-youtube'
import Nav from './components/Nav';
const VideoPage = ({video}) => {
    return (
    <div className='pt-40 flex justify-center'>
    <Youtube videoId={video}/>
    </div>
    )
}
export default VideoPage
