import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useInput } from './useInput';

export const useSearch = () => {
    const [items, setItems] = useState([])
    const [errStatus, setErr] = useState(false)
    const navigate= useNavigate();

    const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API
    const {inputVal, handleInput} = useInput()

    useEffect(()=> {
        async function getItems() {
            setItems([])
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
        }, [YOUTUBE_API, errStatus, inputVal])
 
  return {items, handleInput, errStatus}
}
