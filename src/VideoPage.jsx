import React from 'react'
import Youtube from 'react-youtube'

const VideoPage = ({video}) => {
    return (
    <div className='pt-40 flex justify-center w-11/12'>
    <Youtube videoId={video}/>
    </div>
    )
}
export default VideoPage
