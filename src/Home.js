import './App.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import Card from './components/Card';
import Nav from './components/Nav';
import Error from './Error';

function Home() {
 const [items, setItems] = useState([])
 const [inputVal, setInputVal] = useState('tokyo')
 const [errStatus, setErr] = useState(false)
const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API
  

useEffect(()=> {
  async function getItems() {
    const keyword = `${inputVal} study with me`
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&fields=items(id,snippet(title,description,thumbnails))&part=snippet&q=${keyword}&maxResults=2&videoEmbeddable=true&key=${YOUTUBE_API}`;
    await axios(url)
    .then(res => {
      for (let item of res.data.items) {
        setItems((prev) => [...prev, item])
      }
      setErr(false)
    })
    .catch((error) => {
      if(error.response.status === 403) setErr(true)
      console.log(error.response.status)
    })
  }
  getItems()
},[YOUTUBE_API, errStatus, inputVal])


  const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target[0].value)
        setItems([])
        e.target.value = ''
  }
  

  return (
    <>
    <Nav  handleInput={handleInput} />
    <div className="w-screen">
  
      {errStatus ?
      <Error />
       :
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-center items-center pt-24">
      {items.map((item) => (
        <Card item={item} key={item.id.videoId} />
      ))}
     </div>
    
      }
    </div>
    </>
  )
}

export default Home;
