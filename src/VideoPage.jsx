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
    <div className=' pt-52 flex justify-center items-center flex-col'>
    <Youtube videoId={video.id.videoId}/>
    <button onClick={handleFav} className="rounded-full p-2 cursor-pointer hover:shadow-sm">
        {id.includes(video.id.videoId) ?
           <div className='flex items-center justify-center text-mono tracking-widest'>
            <p className='mr-3'>Remove your favourite list?</p>
            <svg class="w-7 h-7 border-current border-2 rounded-full" fill="#272343" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>           
            </div>
           :
           <div className='flex items-center justify-center text-mono tracking-widest'>
           <p className='mr-3'>Add to your favourite list?</p>
           <svg className="w-7 h-7 border-current border-2 rounded-full" fill="#272343" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path></svg>          
           </div>
        }
        </button>
    </div>
    )
}
export default VideoPage
