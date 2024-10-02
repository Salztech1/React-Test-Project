import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SuggestedList from '../SuggestedList';

const SideNav = () => {
    return (
        <div>
        <nav className="navbar bg-zinc-800 mt-5 ml-3 rounded-md">
            <ul className="nav-links ml-6 p-4">
                <li>
                    <NavLink
                        to="/feed"
                        activeClassName="active-link"
                        className="nav-item hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block"
                    >
                        <i className="bi bi-house"></i> Feed
                    </NavLink>
                </li>

                <li >
                    <NavLink to="/friends" activeClassName="active-link" className='hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block'>
                        <i class="bi bi-people-fill"></i>  Friends
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hikes" activeClassName="active-link" className="hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block">
                        <i class="bi bi-list-nested"></i>  Hikes
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/videos" activeClassName="active-link" className="hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block">
                        <i class="bi bi-film"></i>   Videos
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/pictures" activeClassName="active-link" className="hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block">
                        <i class="bi bi-image-fill"></i>  Photos
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/maps" activeClassName="active-link" className="hover:bg-orange-300  py-2 pl-2 pr-2 rounded-md w-48 block">
                        <i class="bi bi-map"></i>  Maps
                    </NavLink>
                </li>
            </ul>
            <hr className='w-48 ml-5 border-gray-500'/>
            <SuggestedList/>
        </nav>
       
        </div>
    );
};

export default SideNav;
