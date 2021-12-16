import './App.css';
import { useState} from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Error from './Error';
import FavPage from './FavPage';
import { useSearch } from './hooks/useSearch'

function Home() {
 const [nav, setNav] = useState('home')
 
 const {items, handleInput, errStatus} = useSearch()

  const handleNav = (val) =>{
    setNav(val)
  }
  return (
    <>
    <Nav handleInput={handleInput} handleNav={handleNav}/>
    <div className="w-screen">
      {nav === 'home' ?errStatus ?
      <Error />
       :
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-start items-center pt-24">
      {items.map((item) => (
        <Card item={item} key={item.id.videoId} />
      ))}
     </div>
     :
     <FavPage />
      }
    </div>
    </>
  )
}

export default Home;
