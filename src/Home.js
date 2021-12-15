import './App.css';
import { useEffect, useState} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import {add, remove} from './redux/fav'
import axios from "axios";
import Card from './components/Card';

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
        <button className='bg-white' type="primary" onClick={() => getItems()}>add</button>
      {/* {list}
      <button onClick={() => dispatch(add('yay'))}>add</button>
      <button onClick={() => dispatch(remove('yay'))}>remove</button> */}
  
    </div>
  )
}

export default Home;
