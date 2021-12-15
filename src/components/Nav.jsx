import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import FavList from './FavList';
import { useSelector} from "react-redux";


const Nav = ({handleInput}) => {
    const list = useSelector(state => state.favList)
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    const handleMenu = () => {
        setMenuOpen((prev) => !prev)
    }
    const search = ()=>{
      handleInput() 
      handleMenu()
    }


    return (
        <nav className="py-6 bg-white w-full fixed z-50">
        <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
          <section className="flex items-center text-gray-900 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" />
            </svg>
            <Link to='/' className="font-bold text-xl focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">FocusTube</Link>
          </section>
          <section className='hidden md:block'>
              <form onSubmit={handleInput}>
                <div className='flex justify-center items-center gap-3'>
                <input type="text" className="bg-purple-white shadow rounded border-0 py-3 px-20 text-center" placeholder="Search..." />
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
          </section>
          <section>
            <button onClick={handleMenu} className="bg-white relative z-50 flex lg:hidden p-2 rounded-full transition-all outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
              </svg>
            </button>
            <ul className="md:space-x-8 space-x-6 text-gray-900 hidden lg:flex">
              <li className="relative group">
                <Link to='/' className="group outline-none rounded-lg"> Home </Link>
                <div className="w-full h-0.5 bg-transparent transition-al absolute bottom-0" />
              </li>
              <li className="relative group">
                <Link to='fav-videos' className="focus:ring  outline-none rounded-lg">My fav</Link>
                <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
              </li>
              <li className="relative group hidden lg:block">
                <button onClick={handleOpen} className="focus:ring outline-none rounded-lg">Play video from fav list</button>
                <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                {open && list.length >= 1 ?
                 <div className='fixed top-10 right-5 z-10 w-6/12 shadow-md'>
                  <FavList />
                  </div>
                 :open && list.length===0 ?
                  <div className='fixed top-15 right-5 z-10 w-6/12 bg-white h-40 rounded flex items-center justify-center shadow-md'>
                   <h1 className='font-mono font-thin'>Please add videos</h1>
                   </div>
                  :
                  <div></div>
                }
              </li>
            </ul>
          </section>
          </div>
          <section>
            {menuOpen ?
               <div className='bg-white fixed sm:w-full md:w-1/2 z-30 top-10 right-5 p-5 rounded-md shadow-md'>
               <ul className="space-x-6 text-gray-300 flex flex-col items-center justify-center">
               <li className="block md:hidden">
               <form onSubmit={search}>
                   <div className='flex flex-col items-end justify-center gap-3'>
                   <input type="text" className="bg-purple-white shadow rounded border-0 py-2 px-16" placeholder="Search..." />
                    <button className="bg-white shadow w-16 h-10 rounded-full">
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
               </li>
                 <li className="sm:mt-8 m-3">
                   <Link to='/' className="group focus:ring outline-none rounded-lg"> Home </Link>
                 </li>
                 <li className="sm:mt-8 m-3">
                   <Link to='fav-videos' className="focus:ring outline-none rounded-lg">My fav</Link>
                 </li>
                 </ul>
                 </div>
                 :<></>
            }
          </section>
       
      </nav>
    )
}

export default Nav
