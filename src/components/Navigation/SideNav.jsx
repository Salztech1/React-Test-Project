import React from 'react';
import NavItem from './NavItem'; 
import SuggestedList from '../SuggestedList'; 

const SideNav = () => {
    return (
        <div>
            <nav className="navbar bg-zinc-800 mt-5 ml-3 rounded-md">
                <ul className="nav-links ml-6 p-4">
                    <NavItem to="/feed" icon="bi-house" label="Feed" />
                    <NavItem to="/friends" icon="bi-people-fill" label="Friends" />
                    <NavItem to="/hikes" icon="bi-list-nested" label="Hikes" />
                    <NavItem to="/videos" icon="bi-film" label="Videos" />
                    <NavItem to="/pictures" icon="bi-image-fill" label="Photos" />
                    <NavItem to="/maps" icon="bi-map" label="Maps" />
                </ul>
                <hr className='w-48 ml-5 border-gray-500'/>
                <SuggestedList />
            </nav>
        </div>
    );
};

export default SideNav;
