import React from 'react'
//import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import burger from '../../assets/burger.jpg'



const Navbar = () => {
  return (
    <div className=''>
      <div className='flex columns-12  bg-zinc-800 pt-2 pb-2'>

        <div className='columns-2 mt-2 ml-4 '>
          <Link className="" to='/'>
            <button>
              <i class="bi bi-pen"></i>
            </button>
          </Link>
          <span className='ml-1'>
            <input type="search" />
          </span>

        </div>

        <div className=' flex columns-8 mt-2'>
          <Link className="nav-link" to='/search'>
            Search
          </Link>
          <Link className="ml-4" to='/pages'>
            Pages
          </Link>
          <Link className="ml-4" to='/my-network'>
            My Network
          </Link>
          <Link className="ml-4" to='/account'>
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
          <span className='ml-2'>
            <img src={burger} alt="" className='w-10 ' />
          </span>

        </div>

      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
