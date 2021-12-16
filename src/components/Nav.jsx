import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import FavList from './FavList';
import { useSelector} from "react-redux";

const Nav = ({handleInput, handleNav}) => {
    const list = useSelector(state => state.favList)
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }
    const handleMenu = () => {
        setMenuOpen((prev) => !prev)
    }
    const searchMobile = ()=>{
      handleInput() 
      handleMenu()
      handleNav('home')
    }
    const search =() => {
      handleInput() 
      handleNav('home')
    }

    return (
        <nav className="py-6 bg-white w-full fixed z-50">
        <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
          <section className="flex items-center text-gray-900 space-x-2">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" aria-labelledby="bookOpenedIconTitle" stroke="#2d334a" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#2d334a"><path d="M12 6s-2-2-4-2-5 2-5 2v14s3-2 5-2 4 2 4 2c1.333-1.333 2.667-2 4-2 1.333 0 3 .667 5 2V6c-2-1.333-3.667-2-5-2-1.333 0-2.667.667-4 2z"/> <path strokeLinecap="round" d="M12 6v14"/> </svg>
            <button className='text-lg font-semibold' onClick={() => handleNav('home')}>FocusTube</button>
          </section>
          <section className='hidden md:block'>
              <form onSubmit={search}>
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
              <button onClick={() => handleNav('home')}>Home</button>
                <div className="w-full h-0.5 bg-transparent transition-al absolute bottom-0" />
              </li>
              <li className="relative group">
                <button onClick={() => handleNav('fav')}>Fav</button>
              </li>
              <li className="relative group hidden lg:block">
                <button onClick={handleOpen} className="focus:ring outline-none rounded-lg">Play video from fav list</button>
                {open && list.length >= 1 ?
                 <div className='fixed top-15 right-5 w-6/12 shadow-md'>
                  <FavList />
                </div>
                 :open && list.length === 0 ?
                  <div className='fixed top-15 right-5 z-10 w-6/12 bg-white h-40 rounded flex items-center justify-center shadow-md'>
                   <h1 className='font-mono font-thin'>Please add videos</h1>
                   </div>
                  :
                  <></>
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
               <form onSubmit={searchMobile}>
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
