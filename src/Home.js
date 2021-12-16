import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Error from './Error';
import FavPage from './FavPage';
import { useSearch } from './hooks/useSearch'
import VideoPage from './VideoPage';

function Home() {
 const [nav, setNav] = useState('home')
 const [video, setVideo] = useState()
 
 const {items, handleInput, errStatus} = useSearch()

  const handleNav = (val, id) =>{
    setNav(val)
    setVideo(id)
  }
 
  return (
    <>
    <Nav handleInput={handleInput} handleNav={handleNav} />
    <div className="w-screen">
      {errStatus ?
      <Error />
       : nav === 'home'?
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-start items-center pt-24">
      {items.map((item) => (
        <Card item={item} handleNav={handleNav} key={item.id.videoId} />
      ))}
     </div>
     : nav === 'fav' ?
     <FavPage />
     : nav === 'video' ?
     <VideoPage video={video} />  
     :console.log('not found page')
    }
    </div>
    </>
  )
}

export default Home;
