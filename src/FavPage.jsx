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
        <button onClick={()=>dispatch(removeAll())} className="bg-blue hover:bg-white tracking-widest font-mono text-navy hover:text-primary py-2 px-4 rounded shadow">Clear All</button>
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
