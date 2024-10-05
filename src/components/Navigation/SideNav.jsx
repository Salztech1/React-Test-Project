import React from 'react';
import SideNavItem from './SideNavItem'; 
import SuggestedList from '../../Suggestions/SuggestedList'; 
import { navItems } from '../Data/Data';

const SideNav = () => {
    return (
      <div>
        <nav className="navbar bg-social-bg-200 mt-5 ml-3 rounded-md">
          <ul className="nav-links ml-6 p-4">

            {navItems.map((navItem,index)=>{
              return  <SideNavItem 
                key={index}
                to={navItem.to}
                icon={navItem.icon}
                label={navItem.label}
                />;
            })}

          </ul>
          <hr className="w-48 ml-5 border-gray-500" />
          <SuggestedList />
        </nav>
      </div>
    );
};

export default SideNav;
