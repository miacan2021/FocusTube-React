import './App.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import Card from './components/Card';
import Nav from './components/Nav';

function Home() {
 const [items, setItems] = useState([])
 const [inputVal, setInputVal] = useState('tokyo')
const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API
  

useEffect(()=> {
  async function getItems() {
    const keyword = `${inputVal} study with me`;
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&fields=items(id,snippet(title,description,thumbnails))&part=snippet&q=${keyword}&maxResults=2&videoEmbeddable=true&key=${YOUTUBE_API}`;
    const res = await axios(url);
    for (let item of res.data.items) {
      setItems((prev) => [...prev, item]);
    }
  }
  getItems()
},[YOUTUBE_API, inputVal])


  const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target[0].value)
        setItems([])
        e.target.value = ''
  }

  return (
    <>
    <Nav />
    <div className="w-screen">
    <form onSubmit={handleInput}>
    <div className='flex justify-center items-center gap-3'>
    <input type="text" className="bg-purple-white shadow rounded border-0 py-3 px-20" placeholder="Search..." />
     <button className="bg-white shadow w-10 h-10 rounded-full">
  	 <svg version="1.1" className="text-dark w-5 h-5 m-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	     viewBox="0 0 52.966 52.966">
    	<path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"/>
	   </svg>
    </button>
    </div>
    </form>
    {/* <form onSubmit={handleInput}>
    <input placeholder="input search text" type='text'/ >
      <button>search</button>
    </form> */}
      <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0">
      {items.map((item) => (
        <Card item={item} key={item.id.videoId} />
      ))}
     </div>

    
    </div>
    </>
  )
}

export default Home;
