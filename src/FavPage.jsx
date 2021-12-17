import React from 'react'
import Card from './components/Card';
import { useSelector, useDispatch} from "react-redux";
import {removeAll} from './redux/fav'



const FavPage = ({handleNav}) => {
    const list = useSelector(state => state.favList)
    const dispatch = useDispatch()
    return (
        <>
        <div className="pt-28 flex justify-center">
        <button onClick={()=>dispatch(removeAll())} className="bg-white flex tracking-widest font-mono text-navy hover:text-primary py-2 px-4 rounded shadow">
          Reset
        <svg class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path></svg>
          </button>
        </div>
        {list.length >= 1 ?
          <div className="flex pt-2 sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-center items-center ">
          {list.map((item) => (
            <Card item={item} handleNav={handleNav} key={item.id.videoId} />
          ))}
         </div>
         :
         <div className='pt-40 text-center'>
             <h1>Please add videos.</h1>
         </div>
        }
  
        </>
    )
}

export default FavPage
