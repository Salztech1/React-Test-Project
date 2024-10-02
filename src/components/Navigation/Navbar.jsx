import React from 'react'
//import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Person from '../../assets/person.jpg'



const Navbar = () => {
  return (
    <div className=''>
      <div className='flex columns-12  bg-zinc-800 pt-3 pb-3'>

        <div className='columns-2 mt-2 ml-4 '>
          <Link className="" to='/'>
            <button className='hover:bg-sky-700 rounded-md'>
              <i class="bi bi-pen"></i>
            </button>
          </Link>
          <span className='ml-2'>
            <input type="search" placeholder='Search' />
          </span>

        </div>

        <div className=' flex columns-6 mt-2'>
          <Link className="hover:text-sky-300" to='/search'>
            Search
          </Link>
          <Link className="ml-4 hover:text-sky-300" to='/pages'>
            Pages
          </Link>
          <Link className="ml-2 hover:text-sky-300" to='/my-network'>
            My Network
          </Link>
          <Link className="ml-4 hover:text-sky-300" to='/account'>
            Account
          </Link>
        </div>

        <div className='flex columns-2 ml-60'>
          <button>
            <i class="bi bi-chat-square-text"></i>
          </button>

          <button className='ml-3'>
            <i class="bi bi-gear"></i>
          </button>

          <button className='ml-3'>
            <i class="bi bi-bell"></i>
          </button>
          <span className='ml-2 mt-1'>
            <img src={Person} alt="" className='w-10 rounded-md ' />
          </span>

        </div>

      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
