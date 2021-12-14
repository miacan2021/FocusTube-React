import './App.css';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
// import {add, remove} from './redux/fav'
import axios from "axios";
import {Link} from 'react-router-dom';

function Home() {
 const [items, setItems] = useState([])
 const [inputVal, setInputVal] = useState('1hour')
  const list = useSelector(state => state.favList)
  const dispatch = useDispatch()

  useEffect(()=> {
    getItems()
 }, [inputVal])

  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API
  const keyword = `study with me ${inputVal}`
  const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=2&videoEmbeddable=true&key=${YOUTUBE_API}`

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
  const handleFav = (e) => {
    e.preventDefault()
    alert('click')
  }

  return (
    <div className=" bg-gray-500">
      <h1 className='text-xl text-indigo-800'>Hello</h1>
    <form onSubmit={handleInput}>
    <input placeholder="input search text" type='text'/ >
    </form>
      {items.map((item) => (
        <Link to={{pathname: `/study/${item.id.videoId}`}} key={item.id.videoId}>
        <div className="relative max-w-sm w-72 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
        <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-36 rounded-2xl w-full object-cover" alt="thumbnails" src={item.snippet.thumbnails.high.url} />
        <button onClick={handleFav} className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{item.snippet.title}</p>
          <p className="text-md text-gray-800 mt-0">{item.snippet.description}</p>
        </div>
      </div>
      </div>
      </Link>
      ))}

        <button className='bg-white' type="primary" onClick={() => getItems()}>add</button>
      {/* {list}
      <button onClick={() => dispatch(add('yay'))}>add</button>
      <button onClick={() => dispatch(remove('yay'))}>remove</button> */}
  
    </div>
  )
}

export default Home;
