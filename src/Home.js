import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Error from './Error';
import FavPage from './FavPage';
import { useSearch } from './hooks/useSearch'
import VideoPage from './VideoPage';

function Home() {
 const [video, setVideo] = useState()
 const {items, handleInput, errStatus, nav, setNav} = useSearch()

  const handleNav = (val, id) =>{
    setNav(val)
    setVideo(id)
  }
 
  return (
    <>
    <Nav handleInput={handleInput} handleNav={handleNav} />
    <div className=" w-10/12 mx-auto">
      {errStatus ?
      <Error />
       : nav === 'home'?
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-center lg:justify-start items-center pt-24">
      {items.map((item) => (
        <Card item={item} handleNav={handleNav} key={item.id.videoId} />
      ))}
     </div>
     : nav === 'fav' ?
     <FavPage handleNav={handleNav} />
     : nav === 'video' ?
     <VideoPage video={video} />  
     :
     <></>}
     <div className="hidden">
     </div>
    </div>
    </>
  )
}

export default Home;
