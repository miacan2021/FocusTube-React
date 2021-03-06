import { useEffect, useState } from 'react';
import axios from "axios";
import { useInput } from './useInput';

export const useSearch = () => {
    const [items, setItems] = useState([])
    const [errStatus, setErr] = useState(false)
    const {inputVal, handleInput, nav, setNav} = useInput()

    const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API

    useEffect(()=> {
        async function getItems() {
            setItems([])
            const keyword = `Study with me ${inputVal}`
            const url = `https://www.googleapis.com/youtube/v3/search?type=video&fields=items(id,snippet(title,description,thumbnails))&part=snippet&q=${keyword}&maxResults=8&videoEmbeddable=true&key=${YOUTUBE_API}`;
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
        }, [YOUTUBE_API, errStatus, inputVal])
 
  return {items, handleInput, errStatus, nav, setNav}
}
