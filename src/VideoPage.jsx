import Youtube from 'react-youtube'
import { useSelector, useDispatch } from "react-redux";
import {add, remove} from './redux/fav'


const VideoPage = ({video}) => {
    const list = useSelector(state => state.favList)
    const dispatch = useDispatch()  
    
    const id = list.map(el => el.id.videoId)
    const handleFav = (e) => {
       e.preventDefault()
       !id.includes(video.id.videoId) ?
         dispatch(add(video))
       :
        dispatch(remove(video.id.videoId))
      }
    return (
    <div className='pt-40 flex justify-center items-center flex- col'>
    <Youtube videoId={video.id.videoId}/>
    <button onClick={handleFav} className="rounded-full p-2 cursor-pointer hover:shadow-sm">
        {id.includes(video.id.videoId) ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="#ffd803"  viewBox="0 0 24 24" stroke="#ffd803">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
           :
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="#bae8e8">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        }
        </button>
    </div>
    )
}
export default VideoPage
