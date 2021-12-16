import React from 'react'
import { useLocation } from 'react-router-dom';
import Youtube from 'react-youtube'
import Nav from './components/Nav';
import { useSearch } from './hooks/useSearch'


const VideoPage = () => {
    const location = useLocation();
    const { handleInput } = useSearch()
    return (
    <>
    <Nav handleInput = { handleInput } />
    <Youtube videoId={location.pathname.split('/')[2]}/>
    </>
    )
}
export default VideoPage
