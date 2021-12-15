import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {add, remove} from '../redux/fav'

const Card = ({item}) => {
  const list = useSelector(state => state.favList)
  const dispatch = useDispatch()

    const id = list.map(el => el.id.videoId)
    const handleFav = (e) => {
       e.preventDefault()
       !id.includes(item.id.videoId) ?
         dispatch(add(item))
       :
        dispatch(remove(item.id.videoId))
      }
 
    return (
      <>
        <div className="relative max-w-sm w-72 h-96 overflow-hidden border border-gray-200 bg-white shadow-sm rounded-3xl p-3 mx-1 my-3 cursor-pointer hover:shadow-lg">
        <Link to={{pathname: `/study/${item.id.videoId}`}}>
        <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-36 rounded-2xl w-full object-cover" alt="thumbnails" src={item.snippet.thumbnails.high.url} />
        <button onClick={handleFav} className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group hover:shadow-sm">
        {id.includes(item.id.videoId) ?
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
      <div className="mt-2 pl-2 mb-1 flex justify-around flex-col items-center">
          <p className="text-md font-semibold text-gray-900 mt-2">{item.snippet.title}</p>
          <p className="text-sm text-gray-800 mt-3">{item.snippet.description}</p>
      </div>
      </Link>
      </div>
      </>
    )
}

export default Card
