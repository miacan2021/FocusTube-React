import React from 'react'
import Card from './components/Card';
import { useSelector, } from "react-redux";


const FavPage = () => {
    const list = useSelector(state => state.favList)
    return (
        <>
       
        {list.length >= 1 ?
          <div className="flex sm:flex-col md:flex-row flex-wrap gap-3 gap-y-0 justify-center lg:justify-start items-center pt-24">
          {list.map((item) => (
            <Card item={item} key={item.id.videoId} />
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
