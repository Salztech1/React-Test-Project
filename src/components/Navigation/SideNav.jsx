import React from 'react';
import SideNavItem from './SideNavItem'; 
import SuggestedList from '../../Suggestions/SuggestedList'; 

const SideNav = () => {
    return (
      <div>
        <nav className="navbar bg-social-bg-200 mt-5 ml-3 rounded-md">
          <ul className="nav-links ml-6 p-4">
            <SideNavItem to="/feed" icon="bi-house" label="Feed" />
            <SideNavItem to="/friends" icon="bi-people-fill" label="Friends" />
            <SideNavItem to="/hikes" icon="bi-list-nested" label="Hikes" />
            <SideNavItem to="/videos" icon="bi-film" label="Videos" />
            <SideNavItem to="/pictures" icon="bi-image-fill" label="Photos" />
            <SideNavItem to="/maps" icon="bi-map" label="Maps" />
          </ul>
          <hr className="w-48 ml-5 border-gray-500" />
          <SuggestedList />
        </nav>
      </div>
    );
};

export default SideNav;
