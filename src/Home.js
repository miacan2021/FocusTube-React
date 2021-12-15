import './App.css';
import { useEffect, useState} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import {add, remove} from './redux/fav'
import axios from "axios";
import Card from './components/Card';
import FavList from './components/FavList';
import Nav from './components/Nav';

function Home() {
 const [items, setItems] = useState([])
 const [inputVal, setInputVal] = useState('1hour')
  // const list = useSelector(state => state.favList)
  // const dispatch = useDispatch()

  useEffect(()=> {
    getItems()
 }, [inputVal])

  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API
  const keyword = `study with me ${inputVal}`
  const url = `https://www.googleapis.com/youtube/v3/search?type=video&fields=items(id,snippet(title,description,thumbnails))&part=snippet&q=${keyword}&maxResults=2&videoEmbeddable=true&key=${YOUTUBE_API}`

  const getItems = async() => {
    const res = await axios(url)
     for(let item of res.data.items){
       setItems((prev) => [...prev, item])
      }
   }

  const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.targetvalue)
        setItems([])
        e.target.value = ''
  }

  return (
    <>
    <Nav />
    <div className="w-screen">
      <h1 className='text-xl text-indigo-800'>Hello</h1>
    <form onSubmit={handleInput}>
    <input placeholder="input search text" type='text'/ >
    </form>
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0">
      {items.map((item) => (
        <Card item={item} key={item.id.videoId} />
      ))}
     </div>

     <FavList />
    </div>
    </>
  )
}

export default Home;
