import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../redux/fav'


const FavList = ({ handleNav,  handleOpen}) => {
  
    const list = useSelector(state => state.favList)
    const dispatch = useDispatch()
  
    return (
        <div className="flex flex-wrap mt-14 justify-center bg-white rounded-sm p-3">
        <div className="grid grid-cols-7 gap-3 items-center justify-items-center mb-5">
        {list.map((item) => (
            <React.Fragment key={item.snippet.title} >
            <div className="col-span-2 mb-2 mt-2" onClick={() => {handleNav('video', item) 
            handleOpen()}}>
                <img
                  alt="img"
                  src={item.snippet.thumbnails.high.url}
                  className="h-16 w-full mx-auto rounded overflow-y-hidden object-center object-cover"
                />
                </div>
              <div className="col-span-4" onClick={() => {handleNav('video', item)
            handleOpen()}}>
                <h3 className="font-mono text-navy text-md">{item.snippet.title}</h3>
              </div>
              <div className="col-span-1 cursor-pointer">
                <svg onClick={() => dispatch(remove(item.id.videoId))} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="#ffd803"  viewBox="0 0 24 24" stroke="#ffd803">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>
             </React.Fragment>
            ))
        }
        </div>
</div>
      
    )
}

export default FavList
