import React from 'react'
import {  Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Person from '../../assets/my image.jpg'



const Navbar = () => {
  return (
    <div>
      <div className='flex bg-zinc-800 pt-3 pb-3'>

        <div className='columns-2 mt-2 ml-4 '>
          <Link >
            <button className='bg-orange-300 rounded-md pl-2 pr-2 pt-1 pb-1'>
            <i class="bi bi-pencil-square"></i>
            </button>
          </Link>
          
          <span className='ml-2'>
            <input type="search" placeholder='Search' className='p-1 bg-zinc-700 rounded-md'   />
          </span>

        </div>

        <div className=' flex columns-6 mt-2'>
          <Link className="hover:text-orange-300" to='/search'>
            Search
          </Link>
          <Link className="ml-4 hover:text-orange-300" to='/pages'>
            Pages
          </Link>
          <Link className="ml-4 hover:text-orange-300" to='/my-network'>
            My Network
          </Link>
          <Link className="ml-4 hover:text-orange-300" to='/account'>
            Account <i class="bi bi-chevron-down"></i>
          </Link>
        </div>

        <div className='flex columns-2 ml-28 pt-2'>
          <button className='bg-zinc-700 pl-2 pr-2 h-8 rounded-md '>
            <i class="bi bi-chat-square-text"></i>
          </button>

          <button className='ml-3 bg-zinc-700 pl-2 pr-2 h-8 rounded-md'>
            <i class="bi bi-gear"></i>
          </button>

          <button className='ml-3 bg-zinc-700 pl-2 pr-2 h-8 rounded-md'>
            <i class="bi bi-bell"></i>
          </button>
          <span className='ml-2  bg-zinc-700'>
            <img src={Person} alt="" className='w-10 rounded-md ' />
          </span>

        </div>

      </div>
     
    </div>
  )
}

export default Navbar
